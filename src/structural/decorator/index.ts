import assert from 'assert'
import { GetProductsService } from './concrete/get-products-service'
import { GetProductsSortedByNameDecorator } from './concrete/get-products-sorted-by-name-decorator'

const getProductsService = new GetProductsService()
const getProductsSortedByName = new GetProductsSortedByNameDecorator(getProductsService)

const products = getProductsService.get()
const sortedProducts = getProductsSortedByName.get()

// Logs
console.log('-'.repeat(100))
console.log('Products:')
console.table(products)
console.log('Sorted products:')
console.table(sortedProducts)
console.log('-'.repeat(100))

// Tests
assert.equal(products[0].name, 'Orange')
assert.equal(sortedProducts[0].name, 'Apple')
