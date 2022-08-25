import assert from 'assert'
import { CellphoneIterableCollection } from './concrete/cellphone-iterable-collection'

const cellphoneIterableCollection = new CellphoneIterableCollection()

const cellphoneIteratorByAsc = cellphoneIterableCollection.createProductOrderByAscPriceIterator()
const cellphoneIteratorByDesc = cellphoneIterableCollection.createProductOrderByDescPriceIterator()

let ascIterationResult = cellphoneIteratorByAsc.next()
let descIterationResult = cellphoneIteratorByDesc.next()

// Logs
console.log('-'.repeat(100))

while (ascIterationResult.done === false) {
  console.log('Sorted by ASC', ascIterationResult.value)
  ascIterationResult = cellphoneIteratorByAsc.next()
}

console.log('End of ASC', ascIterationResult)

console.log('-'.repeat(100))

while (descIterationResult.done === false) {
  console.log('Sorted by DESC', descIterationResult.value)
  descIterationResult = cellphoneIteratorByDesc.next()
}

console.log('End of DESC', descIterationResult)

console.log('-'.repeat(100))

// Tests
const cellphonesAscForTest = cellphoneIterableCollection.createProductOrderByAscPriceIterator()
const cellphonesDescForTest = cellphoneIterableCollection.createProductOrderByDescPriceIterator()
assert.equal(cellphonesAscForTest.next().value, 'Iphone 13')
assert.equal(cellphonesDescForTest.next().value, 'Xiaomi Readmi 9A')
