import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Toggle } from "../../../../../types/toggle";

@Component({
  selector: 'app-toggle',
  template: `
    <div class="toggle__group">
      <ng-container *ngFor="let toggle of toggles">
        <div class="radio-group__item"
             *ngIf="toggle.value">
          <input id="{{toggle.value}}" type="radio" name="radio"
                 (click)="clickHandling(toggle.value)"
                 [attr.checked]="toggle.value == 'none' ? '' : null"
                 [attr.value]="toggle.value">
          <label for="{{toggle.value}}">{{toggle.label}}</label>
        </div>
      </ng-container>
    </div>
  `,
  styles: [`
    .toggle__group {
      display: flex;
      justify-content: space-between;
      max-width: 826px;
      width: 100%;
      margin: 0 auto;
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .radio-group__item {
      max-width: 270px;
      border-radius: 10px;
      color: rgba(124, 0, 156, 1);
      cursor: pointer;
    }
    .radio-group__item input[type=radio] {
      display: none;
    }
    .toggle__group label {
      display: inline-block;
      background-color: rgba(255, 255, 255, 1);
      border: 2px solid rgba(167, 81, 189, 0.4);
      border-radius: 10px;
      color: rgba(124, 0, 156, 0.4);
      cursor: pointer;
      user-select: none;
      font-size: 15px;
      font-weight: 600;
      line-height: 50px;
      padding: 0 75px;
    }
    /* Checked */
    .toggle__group input[type=radio]:checked + label {
      background-color: rgba(251, 235, 253, 1);
      color: rgba(124, 0, 156, 1);
      border: 2px solid rgba(167, 81, 189, 1);
    }
    /* Hover */
    .toggle__group label:hover {
      color: rgba(124, 0, 156, 1);
      background-color: rgba(251, 255, 255, 1);
      border: 2px solid rgba(167, 81, 189, 1);
    }
  `]
})
export class ToggleComponent implements OnInit {
  @Input() toggles : Array<Toggle> | undefined;
  @Output() changed : EventEmitter<'none' | 'available' | 'actionPrice'> = new EventEmitter();

  private activeButton: 'none' | 'available' | 'actionPrice' | undefined;

  constructor() { }

  ngOnInit(): void { }

  public clickHandling(value: 'none' | 'available' | 'actionPrice' | undefined) {
    if (value != this.activeButton) {
      this.activeButton = value;
      this.changed.emit(value);
    }
  }
}
