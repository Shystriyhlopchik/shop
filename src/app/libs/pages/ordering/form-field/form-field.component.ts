import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-field',
  template: `
    <span class="form__error" *ngIf="message">{{message}}</span>
  `,
  styles: [`
    .form__error {
      display: block;
      margin-top: 10px;
      color: #df4b41;
      text-align: left;
      font-size: 14px;
      animation: errors .1s ease-in-out;
    }
  `]
})
export class FormFieldComponent implements OnInit {
  @Input() message: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
