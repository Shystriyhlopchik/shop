import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header__body">
      <app-logo></app-logo>
      <nav>
        <ul>
          <li>
            <a routerLink="/news"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: true}"
            >Новости</a>
          </li>
          <li>
            <a routerLink="/about"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: true}"
            >О нас</a>
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
