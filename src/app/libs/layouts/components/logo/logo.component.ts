import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div class="logo">
      <img src="../../../../../assets/square.svg" alt="">
      <div class="logo__text">
        <span class="logo__name">красный квадрат</span>
        <span class="logo__span">Раздаточная смартфонов</span>
      </div>
    </div>
  `,
  styles: [`
    .logo {
      display: flex;
      justify-content: space-between;
      width: 198px;
      height: 52px;
    }
    .logo__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 3px;
    }
    .logo__name {
      width: 108px;

      font-family: 'Stalinist One', cursive;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;

      text-transform: uppercase;
      text-align: center;
      color: rgba(255, 255, 255, 1);
    }
    .logo__span {
      font-size: 11px;
      color: rgba(255, 255, 255, 1);
    }
  `]
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
