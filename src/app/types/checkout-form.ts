import { DeliveryAddress } from './delivery-address';

export interface CheckoutForm {
  name: string;
  tel: number;
  delivery: 'pickup' | 'courier';
  payment: 'card' | 'money' | 'nature';
  deliveryAddress?: DeliveryAddress;
}
