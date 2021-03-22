import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <div class="rating-area">
      <input type="radio" id="rate5" name="rating" value="5" [attr.checked]="isChecked(5)" readonly /><label for="rate5"></label>
      <input type="radio" id="rate4" name="rating" value="4" [attr.checked]="isChecked(4)" readonly /><label for="rate4"></label>
      <input type="radio" id="rate3" name="rating" value="3" [attr.checked]="isChecked(3)" readonly /><label for="rate3"></label>
      <input type="radio" id="rate2" name="rating" value="2" [attr.checked]="isChecked(5)" readonly /><label for="rate2"></label>
      <input type="radio" id="rate1" name="rating" value="1" [attr.checked]="isChecked(1)" readonly /><label for="rate1"></label>
    </div>
  `,
  styles: [`
    .rating-area {
      overflow: hidden;
      width: 116px;
      display: flex;
    }

    .rating-area:not(:checked) > input {
      display: none;
    }

    .rating-area:not(:checked) > label {
      width: 22px;
      padding: 0;
      font-size: 20px;
      line-height: 20px;
      color: lightgrey;
    }

    .rating-area:not(:checked) > label:before {
      content: "★";
    }

    .rating-area:checked > label {
      color: gold;
      text-shadow: 1px 1px #c60;
    }

    .rating-area:not(:checked) > label:hover,
    .rating-area:not(:checked) > label:hover ~ label {
      color: gold;
    }
  `]
})
export class RatingComponent implements OnInit {
  @Input() rating : number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  isChecked(number: number): any {
    return this.rating === number ? '' : null;
  }
}
