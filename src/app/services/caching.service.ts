import { Injectable } from '@angular/core';
import { ProductsResponse } from '../types/catalog';
import { HttpResponse } from '@angular/common/http';
import { deepCopy } from 'deep-copy-ts';

export interface UrlCacheObject {
  url: string;
  body: ProductsResponse;
}

@Injectable()
export class CachingService {

  private requestCache: Array<UrlCacheObject> = [];

  // возвращает кэширование
  public getCacheResponse(): Array<UrlCacheObject> {
    return this.requestCache;
  }

  public setResponseInCash(event: HttpResponse<any>): void {
    const eventTemp = deepCopy(event);
    const body = deepCopy(eventTemp.body);
    if (eventTemp.url) {
      this.requestCache.push({url: eventTemp.url, body});
    }
  }


  constructor() { }
}
