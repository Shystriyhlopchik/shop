import { Injectable } from '@angular/core';
import { Product, ProductCart } from "../../../../../../types/card";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public inCart: Array<ProductCart> = [];

  constructor() { }

  // добавляет товар в корзину или увеличивает значение count
  public addProduct(product: Product): void {
    // Проверка наличия в inCart данного продукта
    let coincidence = this.checkAvailability(product);
    if (coincidence != -1) {
      this.inCart[coincidence].count++;
    } else {
      this.inCart.push({count: 1, product});
    }
  }

  // удаляет товар из корзины
  public removeProduct(id: number): void {
    this.inCart.map((item, index, array) => {
      if (item.product.id === id) {
        if (item.count > 1) {
          item.count--;
        } else {
          array.splice(index, 1);
        }
      }
    });
  }

  // возвращает значение переменной inCart
  public getCart(product: ProductCart): number {
    const count = product.count;
    const discount = product.product.price?.discount || 0;
    const value = product.product.price?.value || 0;

    if (discount) {
      return count * value - discount * value * count;
    } else {
      return count * value;
    }
  }

  // возвращает количество товаров в корзине
  public getCount(): number {
    let count = 0;
    this.inCart.forEach(item => {
      count += item.count;
    })
    return count;
  }

  // метод проверки наличия product в inCart
  public checkAvailability(val: Product): number {
    if (this.inCart.length) {
      let ind = -1;
      this.inCart.forEach((item, index) => {
        if (item.product == val) {
          ind = index;
          return false;
        }
        return true;
      });
      return ind;
    }
    return -1;
  }

  // метод офрмления заказа
  public checkout(): void {
    console.log('Заказ оформлен');
  }

  // метод очистки корзины
  public clear(): void {
    this.inCart = [];
  }
}
