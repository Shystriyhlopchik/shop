import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutForm } from '../../../types/checkout-form';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent implements OnInit, OnDestroy {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  deliveryValue = false;
  dataJSON: string | null = '';
  data: CheckoutForm | undefined;


  /** Точки контроля формы(основные)*/
  public checkoutForm: FormGroup = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.pattern('([a-zA-Zа-яёА-ЯЁ]{1,}\\s{1,}[a-zA-Zа-яёА-ЯЁ]{1,}){1,}')]],
    tel: ['',[
      Validators.required,
      Validators.pattern('((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}')]],
    delivery: ['pickup'],
    payment: ['card'],
  });

  /** Точки контроля формы для адреса доставки(вложенные)*/
  private deliveryAddress: FormGroup = this.fb.group({
    city: ['', Validators.required],
    street: ['', Validators.required],
    house: ['', Validators.required],
    entrance: ['', Validators.required],
    apartment: ['', Validators.required]
  });

  private initDeliveryFormOptions() {
    this.checkoutForm.addControl('deliveryAddress', this.deliveryAddress);
    this.deliveryValue = true;
  }
  private removeDeliveryFormOptions() {
    this.checkoutForm.removeControl('deliveryAddress');
    this.deliveryValue = false;
  }

  ngOnInit(): void {
    /** Реализуем подгрузку данных с localeStorage*/
    this.dataJSON = localStorage.getItem('ordering');
    if (this.dataJSON !== null) {
      this.data = JSON.parse(this.dataJSON);
      if (this.data?.deliveryAddress) {
        this.initDeliveryFormOptions();
      }
      if (this.data) {
        this.checkoutForm.setValue(this.data);
      }
    }

    /** В зависимости от способа доставки меняем контрольные точки формы(FormControl)*/
    const deliveryControl = this.checkoutForm.controls.delivery;
    deliveryControl.valueChanges.subscribe(
      (control) => {
        if (control !== 'pickup') {
          this.checkoutForm.get('payment')?.setValue('card');
          this.initDeliveryFormOptions();
        } else {
          this.removeDeliveryFormOptions();
        }
      });
  }

  ngOnDestroy(): void {
    /** При смене страницы сохраняем данные формы в localeStorage в виде JSON */
    localStorage.setItem('ordering', JSON.stringify(this.checkoutForm.value));
  }

  public sendForm(): void {
    if (this.checkoutForm.status === 'VALID') {
      alert('Успех');
      // this.http.post('')
    } else {
      alert('Ошибка валидации формы.');
    }
  }

}
