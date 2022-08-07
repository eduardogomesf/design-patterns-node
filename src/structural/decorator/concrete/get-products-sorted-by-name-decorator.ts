import { GetProductsDecorator } from '../abstract/get-products-decorator'
import { Product, IGetProductsService } from '../abstract/get-products-service-interface'

export class GetProductsSortedByNameDecorator extends GetProductsDecorator {
  constructor (
    getProductsService: IGetProductsService
  ) {
    super(getProductsService)
  }

  get (): Product[] {
    return this.getProductsService.get()
      .sort((currentProduct, nextProduct) => currentProduct.name.toLowerCase().localeCompare(nextProduct.name.toLowerCase()))
  }
}
