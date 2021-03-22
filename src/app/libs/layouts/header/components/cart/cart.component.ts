import { Component, OnChanges } from '@angular/core';
import { ProductCart } from "../../../../../types/card";
import { CartService} from "./services/cart.service";

@Component({
  selector: 'app-cart',
  template: `
    <button class="cart"
       (click)="isActive = !isActive"
       [attr.disabled]="!cartService.getCount() ? '' : null">
      <img class="cart__img" src="../../../../assets/cart.svg" alt="Корзина раздаточной">
      <div class="cart__count" [class.cart__count_hide]="cartService.getCount() === 0">
        <span class="cart__span">{{ cartService.getCount() }}</span>
      </div>
    </button>

<!--превью корзины-->
    <div class="preview" *ngIf="!isActive">
      <span class="material-icons material-icons__left"
            (click)="isActive = !isActive">
        highlight_off
      </span>
      <!--список товаров-->
      <div class="preview__product"
           *ngFor="let product of cartService.inCart">
        <figure class="preview__img">
          <img [src]="product.product.image"
               [alt]="product.product.title">
        </figure>
        <div class="preview__information">
          <span class="preview__title">{{ product.product.title }}</span>
          <span class="preview__count">{{ product.count }}</span>
          <span class="preview__price">{{ cartService.getCart(product) | currency:"RUB":"symbol":"1.0-0" }}</span>
          <span class="material-icons"
                (click)="cartService.removeProduct(product.product.id);
                        deactivation( cartService.getCount() )">
            delete
          </span>
        </div>
      </div>
      <span>Итого:{{ totalAmount(cartService.inCart).finalCost | currency:"RUB":"symbol":"1.0-0" }}</span>
      <span>Общий размер сскидки:{{ totalAmount(cartService.inCart).sumDiscount | currency:"RUB":"symbol":"1.0-0" }}</span>
      <app-button>Добавить в корзину</app-button>
    </div>
  `,
  styles: [`
    .cart {
      padding: 0;
      border: none;
      background-color: transparent;
      cursor: pointer;
      position: relative;
    }

    .cart__count {
      position: absolute;
      top: -5px;
      right: -8px;
      width: 21px;
      height: 21px;
      border-radius: 50%;
      background-color: rgba(201, 3, 3, 1);
      color: white;
    }

    .cart__count_hide {
      display: none;
    }

    .cart__span {
      font-family: 'Stalinist One', cursive;
      font-size: 12px;
      line-height: 21px;
    }

    .material-icons {
      font-size: 36px;
      cursor: pointer;
    }
    .material-icons__left {
      align-self: flex-end;
      margin: 10px;
    }
    .preview {
      position: absolute;
      display: flex;
      max-width: 500px;
      flex-direction: column;
      border: 1px solid #DDDDDD;
      border-radius: 10px;
      background-color: #fff;
      z-index: 2;


      font-size: 14px;
    }
    .preview__product {
      display: flex;
    }
    .preview__display_none {
      display: none!important;
    }
    .preview__img {
      margin: 0;
    }
    .preview__img img{
      width: 83px;
      height: 83px;
      object-fit: contain;
    }
    .preview__information {
      display: flex;
      align-items: center;
    }
    .preview__title{
      margin: 0 10px;
      font-family: 'Inter', sans-serif;
      font-weight: 100;
    }
    .preview__count {
      margin: 0 10px;
    }
    .preview__price {
      margin: 0 10px;
      font-size: 18px;
    }
  `]
})
export class CartComponent implements OnChanges {

  public isActive = true;
  public isDisabled = true;

  constructor(public cartService: CartService) { }

  ngOnChanges(){}

  // метод для подсчета итоговой суммы и общей скидки
  public totalAmount(productsArray: Array<ProductCart> | undefined): {finalCost: number, sumDiscount: number} {
    let sum = 0;
    let sumDiscount =0;
    let val = 0;
    let dis = 0;
    productsArray?.map((item)=>{
      val = item.product.price?.value || 0;
      dis = item.product.price?.discount || 0;
      if (dis) {
        sumDiscount += item.count * val * dis;
        sum += item.count * val - item.count * val * dis;
      } else {
        sum += item.count * val;
      }
    })
    return {finalCost: sum, sumDiscount: sumDiscount };
  }

  // метод скрытия списка корзины если она станет пустой
  public deactivation(count: number): void {
    if (!count) {
      this.isActive = !this.isActive;
    }
  }
}
