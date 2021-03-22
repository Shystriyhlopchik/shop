import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header.component";
import { LogoModule } from "../components/logo/logo.module";
import { RouterModule } from "@angular/router";
import { CartModule } from "./components/cart/cart.module";



@NgModule({
  declarations: [ HeaderComponent ],
    imports: [
      CommonModule,
      LogoModule,
      RouterModule,
      CartModule
    ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
