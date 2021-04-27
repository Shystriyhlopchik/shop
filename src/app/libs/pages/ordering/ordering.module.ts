import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderingComponent } from './ordering.component';
import { OrderingRoutingModule } from './ordering-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from "./form-field/form-field.module";


@NgModule({
  declarations: [OrderingComponent],
  imports: [
    CommonModule,
    OrderingRoutingModule,
    ReactiveFormsModule,
    FormFieldModule
  ],
  exports: [
    OrderingComponent
  ]
})
export class OrderingModule { }
