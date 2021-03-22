import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from "./header/header.module";
import { LogoModule } from "./components/logo/logo.module";
import {FooterModule} from "./footer/footer.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LogoModule
  ],
  exports: [HeaderModule, FooterModule]
})
export class LayoutsModule { }
