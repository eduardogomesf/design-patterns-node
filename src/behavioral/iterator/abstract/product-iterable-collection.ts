import { ProductIterator } from './product-iterator'

export interface ProductIterableCollection {
  createProductOrderByAscPriceIterator: () => ProductIterator
  createProductOrderByDescPriceIterator: () => ProductIterator
}
