import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header__body">
      <app-logo></app-logo>
      <nav>
        <ul>
          <li>
            <a routerLink="/registration"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: true}"
            >Регистрация</a>
          </li>
          <li>
            <a routerLink="/ordering"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: true}"
            >Оформление заказа</a>
          </li>
          <li>
            <a routerLink="/contacts"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: true}"
            >Контакты</a>
          </li>
          <li>
            <a routerLink="/profile"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: true}"
            >Личный кабинет</a>
          </li>
        </ul>
      </nav>
      <app-cart class="header__cart"></app-cart>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
