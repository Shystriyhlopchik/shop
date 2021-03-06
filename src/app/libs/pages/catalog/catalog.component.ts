import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Toggle } from '../../../types/toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from './catalog.service';
import { ProductsResponse } from '../../../types/catalog';
import { fromEvent, Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, pluck, switchMap, tap } from 'rxjs/operators';

const buttonToggles: Array<Toggle> = [
  {value: 'none', label: 'Показать все'},
  {value: 'available', label: 'В наличии'},
  {value: 'actionPrice', label: 'Со скидкой'}];


@Component({
  selector: 'app-catalog',
  template: `
    <div class="page">
      <section class="page__filter">
        <app-toggle
          [toggles]="getToggles()"
          (changed)="applyQuery$({orderBy: $event})">
        </app-toggle>
        <div class="page__search">
          <input type="text" placeholder="Поиск" id="search">
          <div *ngIf="searchResult$ | async as searchResult">
            <ng-container *ngIf="searchResult.length > 0; else notFound">
              <div *ngFor="let result of searchResult">{{result.title}}</div>
            </ng-container>
            <ng-template #notFound>
              <div>Не найдено</div>
            </ng-template>
          </div>
        </div>
      </section>
      <h2>Выбери свое чудо</h2>
      <div *ngIf="products$ | async as products">
        <section class="catalog">
          <app-product-card
            *ngFor="let product of products.data"
            [product]="product"
            [routerLink]="['/catalog', product.id]"
          ></app-product-card>
        </section>
        <section class="page__control">
          <div class="page__navigation">
            <app-datatable-page-control
              *ngFor="let page of createPagesArray(products.meta.pages); index as i;"
              [page]="i + 1"
              [isCurrent]="i + 1 == products.meta.current"
              (click)="applyQuery$({page: toString(i + 1)})"
            ></app-datatable-page-control>
          </div>
          <button
            (click)="loadProducts({page: getNumberPage()})"
            [attr.disabled]="products.meta.pages > products.meta.current  ? null : ''"
          >Загрузить ещё</button>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .page {
      max-width: 1170px;
      width: 100%;
      margin: 0 auto;
    }

    .page__search {
      display: flex;
      margin: 0 auto;
      width: 350px;
      flex-direction: column;
    }

    .page__filter {
      width: 100%;
      background-color: rgba(251, 251, 251, 1);
    }

    .catalog {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      grid-gap: 16px;
    }

    h2 {
      margin: 50px auto;
      text-align: center;
      font-weight: 600;
      font-size: 30px;
    }

    .page__control {
      position: relative;
      display: flex;
    }

    .page__navigation {
      position: absolute;
      top: 18px;
      right: 0;
      display: flex;
    }

    button {
      background-color: rgba(0, 153, 255, 1);
      color: rgba(255, 255, 255, 1);
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      font-weight: 600;
      line-height: 60px;
      padding: 0 61px;
      cursor: pointer;
      margin: 100px auto;
      border: none;
    }

    button:focus {
      outline: none;
    }
  `]
})
export class CatalogComponent implements OnInit {
  public products$: Observable<ProductsResponse> | undefined;
  public current = 1;
  private headers: HttpHeaders | undefined;
  public searchResult$: Observable<any> | undefined;
  @Output() onChanged = new EventEmitter<boolean>();
  change(increased: any) {
    this.onChanged.emit(increased);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getProducts(params);
      this.current = params.page;
    });

    const search = document.querySelector('#search');
    if (search) {
      this.searchResult$ = fromEvent(search, 'input').pipe(
        pluck('target', 'value'),
        distinctUntilChanged(),
        debounceTime(300),
        switchMap((searchTerm: any) => {
          return this.searchProduct$({searchTerm});
        }),
        pluck('data'),
        tap(v => console.log(v))
      );
    }
    this.searchResult$?.subscribe((event) => console.log(event));
  }

  // метод для передачи Toggle(переключателей)
  public getToggles(): Array<Toggle> {
    return buttonToggles;
  }

  // метод для установки queryParams
  public applyQuery$(param: {[key: string]: string}): void {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: param,
      queryParamsHandling: 'merge'
    });
  }

  public createPagesArray(pageCount: number): Array<any> {
    return [...new Array(pageCount)];
  }

  // метод для преобразования в строку
  public toString(val: any): string {
    return val as string;
  }

  //
  public getProducts(params: {[key: string]: string}): void {
    const queryParams = {
      ...params,
      page: params.page ? params.page : '1'
    };
    this.products$ = this.catalogService.getProducts$(queryParams, this.headers);
    this.headers = undefined;
  }

  // Метод для возвращения следующей страницы в виде строки
  public getNumberPage(): string {
    return `${Number(this.current) + 1}`;
  }

  public loadProducts(param: { page: string }): void {
    this.headers = new HttpHeaders().set('Button-Control', 'public');
    this.applyQuery$(param);
  }

  // метод отрабатывающий по поиску
  public searchProduct$(param: {searchTerm: string}): Observable<ProductsResponse> {
    return this.catalogService.getProducts$(param);
  }

  constructor(private router: Router, private route: ActivatedRoute,
              private catalogService: CatalogService) { }
}
