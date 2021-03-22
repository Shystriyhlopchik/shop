import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { ButtonModule } from "../button/button.module";
import { BadgeModule } from "../badge/badge.module";
import { RatingModule } from "../rating/rating.module";
import { IconModule } from "../icon/icon.module";
import { CartModule } from "../libs/layouts/header/components/cart/cart.module";



@NgModule({
  declarations: [ProductCardComponent],
    imports: [
      CommonModule,
      ButtonModule,
      BadgeModule,
      RatingModule,
      IconModule,
      CartModule
    ],
  exports: [ProductCardComponent]
})
export class ProductCardModule { }
