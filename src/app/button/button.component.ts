import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<p
    [class.button_small]="'small' == buttonSize"
    [class.button_large]="'large' == buttonSize"
    [class.button_default]="true"
    [style.backgroundColor]="buttonColor"
    [ngClass]="{button_active: isActive}"
    [attr.disabled]="isDisabled ? '' : null"
  >
    <ng-content></ng-content>
  </p>`,
  styles: [`
    p {
      border: 1px solid #DDDDDD;
      border-radius: 10px;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      color: #555;
      text-align: center;
      padding: 0 20px 0 20px;
      margin: 0;
      cursor: pointer;
    }
    p:hover {
      color: #fff;
      background-color: #555;
    }

    .button_default {
      height: 40px;
      line-height: 40px;
      font-size: 16px;
    }
    .button_small {
      width: 87px;
      height: 20px;
      line-height: 20px;
      font-size: 8px;
    }
    .button_large {
      width: 348px;
      height: 80px;
      line-height: 80px;
      font-size: 32px;
    }
    .button_active {
      background-color: darkgrey!important;
    }
    .button_active:hover {
      cursor: default;
    }
  `]
})

export class ButtonComponent implements OnChanges {
  @Input() set setColor(color: string | undefined){
    this.buttonColor = color;
  }
  @Input() isDisabled = true;
  @Input() isActive = false;
  @Input() size: string | undefined;
  ngOnChanges() {
    if(this.size){
      this.buttonSize = this.size;
    }
  }

  buttonSize: string | undefined = undefined;
  buttonColor: string | undefined = undefined;

  constructor() { }
}
