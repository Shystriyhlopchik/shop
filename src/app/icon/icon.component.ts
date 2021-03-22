import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <span class="material-icons">
        favorite
    </span>
  `,
  styles: [`
    span {
      height: 40px;
      line-height: 40px;
      color: #DDD;
      border: 1px solid #DDDDDD;
      border-radius: 10px;
      padding: 0 11px;
    }
  `]
})
export class IconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
