import IProduct from "../Models/IProduct";
import IRepository from '../Interfaces/IRepository';
import ProductMockRepository from '../Repositories/ProductMockRepository';
import ProductRepository from "../Repositories/ProductRepository";

class ProductRepositoryFactory {

    static readonly mock = true; //enviroment variable.

    static getInstance(): IRepository<IProduct> {

        const repositories: Record<string, any> = {
            mock: ProductMockRepository,
            default: ProductRepository 
        };

        return new repositories[ProductRepositoryFactory.mock ? 'mock' : 'default']();
    }
}

export default ProductRepositoryFactory;
