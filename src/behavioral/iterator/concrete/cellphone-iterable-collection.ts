import { ProductIterableCollection } from '../abstract/product-iterable-collection'
import { ProductIterator } from '../abstract/product-iterator'
import { CellphoneIterator } from './cellphone-iterator'
import { SortTypes } from './constants'

export class CellphoneIterableCollection implements ProductIterableCollection {
  private cellphones = ['Samsung Galaxy s10', 'Iphone 13', 'Xiaomi Readmi 9A', 'Pocophone M4']

  createProductOrderByAscPriceIterator (): ProductIterator {
    return new CellphoneIterator(SortTypes.asc, this.cellphones)
  }

  createProductOrderByDescPriceIterator (): ProductIterator {
    return new CellphoneIterator(SortTypes.desc, this.cellphones)
  }
}
