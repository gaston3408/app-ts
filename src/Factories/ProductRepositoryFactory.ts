import IProduct from "../Models/IProduct";
import IRepository from '../Interfaces/IRepository';
import ProductMockRepository from '../Repositories/ProductMockRepository';

class ProductRepositoryFactory {

    static readonly mock = true;

    static getInstance(): IRepository<IProduct> {

        const repositories: Record<string, any> = {
            mock: ProductMockRepository,
            default: null 
        };

        return new repositories[ProductRepositoryFactory.mock ? 'mock' : 'default']();
    }
}

export default ProductRepositoryFactory;
