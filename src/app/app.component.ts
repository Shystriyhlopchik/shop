import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shop';
  size = '';
  color = '';
  isFavorit = false;

  constructor() { }

  ngOnInit() { }

  eventHandling(val?: string) {
    if (val && (val != this.size)) {
      this.size = val;
    }
  }

  colorProcessing(val: string) {
    if (val) {
      this.color = val;
    }
  }

  toggelFavorite() {
    this.isFavorit = !this.isFavorit;
  }
}
