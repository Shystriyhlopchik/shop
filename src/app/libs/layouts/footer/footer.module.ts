import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer.component";
import {LogoModule} from "../components/logo/logo.module";



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    LogoModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
