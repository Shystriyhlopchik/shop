import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from "./catalog.component";
import { ProductCardModule } from "../../../product-card/product-card.module";
import { ToggleModule } from "./components/toggle/toggle.module";
import { CatalogRoutingModule } from "./catalog-routing.module";
import { CatalogService } from "./catalog.service";
import { DatatablePageControlModule } from "./components/datatable-page-control/datatable-page-control.module";
import { CartModule } from "../../layouts/header/components/cart/cart.module";



@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    ProductCardModule,
    ToggleModule,
    CartModule,
    CatalogRoutingModule,
    DatatablePageControlModule
  ],
  providers:[CatalogService],
  exports: [CatalogComponent]
})
export class CatalogModule { }
