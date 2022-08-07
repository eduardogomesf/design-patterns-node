import { IGetProductsService, Product } from '../abstract/get-products-service-interface'

export class GetProductsService implements IGetProductsService {
  get () : Product[] {
    return [
      { id: 1, name: 'Orange', price: 2.5 },
      { id: 2, name: 'Banana', price: 3 },
      { id: 3, name: 'Apple', price: 5 }
    ]
  }
}
