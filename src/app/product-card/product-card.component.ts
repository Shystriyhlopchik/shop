import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Product, ProductPrice} from "../types/card";
import {CartService} from "../libs/layouts/header/components/cart/services/cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() selected: EventEmitter<Product> = new EventEmitter()
  constructor(public cartService: CartService) {}

  ngOnInit(): void { }

  select(product: Product) {
    this.selected.emit(product);
  }

  // метод расчета стоимости продукта с учетом скидки
  getPrice(price: ProductPrice | undefined): number {
    if (price?.value) {
      return price.discount ? (price.value - price.value * price.discount) : price.value;
    } else {
      return 0;
    }
  }
}
