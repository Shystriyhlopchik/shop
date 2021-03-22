import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <app-button
      (click)="activation('click')"
      (mouseover)="activation('hover')"
      (mouseleave)="activation('hover')">
      Добавить в корзину
    </app-button>
    <app-menu class="menu" [class.menu_active]="isOpen"></app-menu>
  `,
  styles: [`
    .menu{
      display: none;
      width: 206px;
      line-height: 40px;
      font-size: 16px;
      border: 1px solid #EEE;
      box-sizing: border-box;
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 6px 8px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
    }
    .menu_active{
      display: flex!important;
    }
  `]
})
export class DropdownComponent implements OnChanges {
  @Input() trigger: 'hover'|'click' = 'click';
  ngOnChanges() {

  }
  isOpen: boolean = false;

  constructor() { }

  activation(type: string) {
    if (type == this.trigger){
      this.isOpen = !this.isOpen;
    }
  }
}
