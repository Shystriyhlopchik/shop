import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from "./cart.component";
import { ButtonModule } from "../../../../../button/button.module";



@NgModule({
  declarations: [CartComponent],
    imports: [
        CommonModule,
        ButtonModule
    ],
  exports: [CartComponent]
})
export class CartModule { }
