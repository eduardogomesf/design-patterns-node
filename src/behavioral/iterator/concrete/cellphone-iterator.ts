import { ProductIterator, ProductIteratorResult } from '../abstract/product-iterator'
import { SortTypes } from './constants'

export class CellphoneIterator implements ProductIterator {
  private position = 0
  private cachedCellphones: string[] = null as any

  constructor (
    private sortType: string,
    private cellphones: string[]
  ) {}

  hashMore (): boolean {
    return this.position < this.cellphones.length
  }

  next (): ProductIteratorResult {
    if (!this.hashMore()) {
      return { done: true, value: null as any }
    }

    let cellphonesToSaveInCache: string[] = []
    let result = {} as any

    if (this.sortType === SortTypes.asc && !this.cachedCellphones) {
      cellphonesToSaveInCache = this.getCellphonesSortedByAsc()

      result = { done: false, value: cellphonesToSaveInCache[this.position] }
    } else if (this.sortType === SortTypes.desc && !this.cachedCellphones) {
      cellphonesToSaveInCache = this.getCellphonesSortedByDesc()

      result = { done: false, value: cellphonesToSaveInCache[this.position] }
    } else {
      result = { done: false, value: this.cachedCellphones[this.position] }
    }

    if (!this.cachedCellphones) {
      this.cacheCellphones(cellphonesToSaveInCache)
    }

    this.position = this.position + 1

    return result
  }

  reset (): void {
    this.position = 0
    this.cachedCellphones = null as any
  }

  cacheCellphones (cellphonesToSaveInCache: string[]) {
    this.cachedCellphones = cellphonesToSaveInCache
  }

  getCellphonesSortedByAsc () {
    return [...this.cellphones].sort()
  }

  getCellphonesSortedByDesc () {
    return [...this.cellphones].sort().reverse()
  }
}
