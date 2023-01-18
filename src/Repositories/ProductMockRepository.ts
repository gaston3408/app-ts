import IFilter from '../Interfaces/IFilter';
import IRepository from '../Interfaces/IRepository';
import IProduct from '../Models/IProduct';
import products from '../data/products'

class ProductMockRepository implements IRepository<IProduct> {
    async list(filter: IFilter): Promise<IProduct[]> {

        return await Promise.resolve(
            products
        );
    }
}

export default ProductMockRepository;
