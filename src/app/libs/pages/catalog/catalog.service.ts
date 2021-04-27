import { Injectable } from '@angular/core';
import { Product } from '../../../types/card';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpServices } from '../../../services/http-services.service';
import { environment } from '../../../../environments/environment';
import { ProductsResponse } from '../../../types/catalog';

@Injectable()
export class CatalogService {
  // метод для получения продукции
  public getProducts$<T>(queryParams: {[key: string]: string} = {}, headers?: HttpHeaders): Observable<ProductsResponse> {
    const params = new HttpParams({fromObject: queryParams});
    const url = `${environment.baseUrl}/catalog`;
    return this.http.get<ProductsResponse>(url, {params, headers});
  }
  // метод возвращающий Product по id
  public getProduct$(id: number): Observable<Product> | undefined {
    const url = `${environment.baseUrl}/catalog/${id}`;
    return this.http.get<Product>(url);
  }

  // запрос для поиска продукта
  public searchProduct$(searchTerm: string): Observable<Array<Product>> | undefined {
    const url = `${environment.baseUrl}/search`;
    return;
  }

  constructor(private http: HttpServices) { }
}
