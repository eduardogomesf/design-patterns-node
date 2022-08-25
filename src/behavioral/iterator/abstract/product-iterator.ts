export type ProductIteratorResult = {
  value: string
  done: boolean
}

export interface ProductIterator {
  hashMore: () => boolean
  next: () => ProductIteratorResult
  reset: () => void
}
