import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatablePageControlComponent } from "./datatable-page-control.component";



@NgModule({
  declarations: [DatatablePageControlComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DatatablePageControlComponent
  ]
})
export class DatatablePageControlModule { }
