import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <section>
      <app-logo></app-logo>
      <span>Красный квадрат | Политика конфиденциальности</span>
      <div><img src="../../../../assets/instagram.svg" alt="instagram"><img src="../../../../assets/vk.svg" alt="ВК"></div>
    </section>
  `,
  styles: [`
    section {
      display: flex;
      justify-content: space-between;
      max-width: 1170px;
      margin: 0 auto;
      color: rgba(255, 255, 255, 1);
      align-items: center;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
