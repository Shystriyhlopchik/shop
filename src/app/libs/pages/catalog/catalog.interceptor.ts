import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {mapTo, tap} from 'rxjs/operators';
import { CachingService } from '../../../services/caching.service';
import { Injectable } from '@angular/core';
// import {deepCopy} from "deep-copy-ts";

export const deepCopy = <T>(target: T): T => {
  if (target === null) {
    return target;
  }
  if (target instanceof Date) {
    return new Date(target.getTime()) as any;
  }
  if (target instanceof Array) {
    const cp = [] as any[];
    (target as any[]).forEach((v) => { cp.push(v); });
    return cp.map((n: any) => deepCopy<any>(n)) as any;
  }
  if (typeof target === 'object' && target !== {}) {
    const cp = { ...(target as { [key: string]: any }) } as { [key: string]: any };
    Object.keys(cp).forEach(k => {
      cp[k] = deepCopy<any>(cp[k]);
    });
    return cp as T;
  }
  return target;
};

@Injectable()
export class CatalogInterceptor implements HttpInterceptor{
  public cachedProducts: any;

  constructor(public cachingService: CachingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Если происходит  переключение между страницами
    console.log('req: ', req);
    if (!req.headers.has('Button-Control')) {
      const cacheData = this.cachingService
        .getCacheResponse()
        .find(item => item.url == req.urlWithParams);
      if (cacheData) {
        this.cachedProducts = cacheData.body;
        return of (
          new HttpResponse({
            status: 200,
            body: this.cachedProducts
          })
        )
      }
      else {
        return next.handle(req).pipe(
          tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
               this.cachedProducts = event.body;
              this.cachingService.setResponseInCash(event);
            }
          })
        );
      }
    }
    // если мы нажали "Загрузить ещё"
    return next.handle(req).pipe(
      tap((res: HttpEvent<any>) => {
        if (res instanceof HttpResponse) {
          this.cachingService.getCacheResponse();
          this.cachedProducts.data = [
            ...this.cachedProducts.data,
            ...res.body.data
          ];
          this.cachingService.getCacheResponse();
          this.cachingService.getCacheResponse();
        }
      }),
      mapTo(new HttpResponse({
            status: 200,
            body: this.cachedProducts
          }))
    );
  }
}
