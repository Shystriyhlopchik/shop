import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductPageComponent} from "./product-page.component";
import {ToggleModule} from "../libs/pages/catalog/components/toggle/toggle.module";



@NgModule({
  declarations: [ProductPageComponent],
    imports: [
        CommonModule,
        ToggleModule
    ],
  exports: [ ProductPageComponent ]
})
export class ProductPageModule { }
