import { IGetProductsService, Product } from './get-products-service-interface'

export abstract class GetProductsDecorator implements IGetProductsService {
  constructor (
    protected getProductsService: IGetProductsService
  ) {}

  get (): Product[] {
    return this.getProductsService.get()
  }
}
