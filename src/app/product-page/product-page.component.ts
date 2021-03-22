import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../types/card';
import { CatalogService } from '../libs/pages/catalog/catalog.service';

@Component({
  selector: 'app-product-page',
  template: `
    <p>ProductPage</p>
    <div>{{ product?.title }}</div>
    <div>{{ product?.company }}</div>
  `,
  styles: []
})
export class ProductPageComponent implements OnInit {
  public productId: number;
  public product: Product | undefined;

  constructor(private catalogService: CatalogService,
              private route: ActivatedRoute) {
    this.productId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.catalogService.getProduct$(this.productId)?.subscribe(response => {
      this.product = response;
    });
  }
}
