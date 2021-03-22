import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-datatable-page-control',
  template: `
    <button
      class="page-control"
      [attr.disabled]="isCurrent ? '' : null"
      (click)="changePage.emit(page)"
    >
      {{page}}
    </button>
  `,
  styles: [`
    :hover {
      display: block;
    }
    .page-control {
      display: flex;
      width: 36px;
      height: 36px;
      min-width: 36px;
      min-height: 36px;
      border-radius: 4px;
      border: 1px solid;
      border-color: rgba(218, 220, 224, 0);
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      transition: all 0.15s ease;
      cursor: pointer;
      background-color: #fff;
    }
    .page-control:hover {
      border-color: rgba(218, 220, 224, 0.8);
    }
    .page-control:disabled {
      color: #1a73e8;
    }
  `]
})
export class DatatablePageControlComponent implements OnInit {
  @Input() page: number | undefined;
  @Input() isCurrent = false;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

}
