import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ProductBadge} from "../types/card";

@Component({
  selector: 'app-badge',
  template: `
    <div class="badge" *ngIf="getFlag()" [style.background-color]="this.color">
      {{this.text + ' '}}{{this.disValue | percent}}
    </div>
  `,
  styles: [`
    .badge {
      display: inline-block;
      height: 32px;
      background-color: #000;
      color: #fff;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-style: normal;
      font-size: 16px;
      line-height: 32px;
      border-radius: 4px;
      padding: 0 10px;
    }
    .badge_color_pink {
      color: #fff;
      font-family: 'Inter', sans-serif;
    }
  `]
})
export class BadgeComponent implements OnChanges {
  @Input() set setBadge(badge:ProductBadge|undefined){
    if(badge){
      this.color = badge.color;
      this.text = badge.text;
    }
  }
  @Input() set setDiscount(discount:number|undefined){
    if(discount){
      this.disValue = discount;
    }
  }

  color : string | undefined;
  text : string | undefined;
  disValue : number | undefined;

  constructor() { }

  ngOnChanges(): void {

  }

  getFlag():boolean{
    if (this.text && this.disValue && this.color){
      return true;
    } else return false;
  }
}
