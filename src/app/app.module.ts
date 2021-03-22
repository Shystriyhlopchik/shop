import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule } from "./button/button.module";
import { DropdownModule } from "./dropdown/dropdown.module";
import { ProductCardModule } from "./product-card/product-card.module";
import { ToggleModule } from "./libs/pages/catalog/components/toggle/toggle.module";

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { NotFoundModule } from "./not-found/not-found.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { DatatablePageControlModule } from "./libs/pages/catalog/components/datatable-page-control/datatable-page-control.module";
import { CatalogInterceptor } from "./libs/pages/catalog/catalog.interceptor";
import { LayoutsModule } from "./libs/layouts/layouts.module";
import {CachingRequestsInterceptor} from "./services/caching-requests.interceptor";

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    DropdownModule,
    ProductCardModule,
    ToggleModule,
    NotFoundModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    DatatablePageControlModule,
    LayoutsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "ru"},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatalogInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingRequestsInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
