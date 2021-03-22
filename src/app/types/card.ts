export interface Product {
  id: number
  availability: boolean
  company?: string
  title?: string
  image?: string
  rating?: ProductRating
  price?: ProductPrice
  badge?: ProductBadge
}

export interface ProductPrice {
  value?: number
  discount?: number
}

export interface ProductRating {
  value?: number
  reviews?: number
}

export interface ProductBadge {
  color?: string
  text?: string
}

export interface ProductCart {
  count: number
  product: Product
}
