import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpServices {
  public get<T>(url: string, params?: Object ): Observable<T> {
    return this.http.get<T>(url, params);
  }
  constructor(private http: HttpClient) { }
}
