import {Product} from "./card";

export interface ProductsResponse {
  meta: {[key: string]: number },
  data: Array<Product>
}
