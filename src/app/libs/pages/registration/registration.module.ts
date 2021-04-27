import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from "./registration-routing.module";
import { FormsModule } from '@angular/forms';
import { FormFieldModule } from './form-field/form-field.module';
import { PasswordMatchDirective } from './password-match.directive';



@NgModule({
  declarations: [RegistrationComponent, PasswordMatchDirective],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule,
    FormFieldModule
  ],
  exports: [RegistrationComponent]
})
export class RegistrationModule { }
