import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";


export class CatalogInterceptor implements HttpInterceptor{
  public cachedProducts: any;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Если происходит переключение между страницами
    if (!req.headers.has('Button-Control')) {
      return next.handle(req).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.cachedProducts = event.body;
          }
        })
      );
    }
    // если мы нажали "Загрузить ещё"
    next.handle(req).subscribe(res => {
      if (res instanceof HttpResponse) {
        this.cachedProducts.data = [
          ...this.cachedProducts.data,
          ...res.body.data
        ]
        this.cachedProducts.meta.current++
      }
    })
    return of(
      new HttpResponse({
        status: 200,
        body: this.cachedProducts
      })
    )
  }
}
