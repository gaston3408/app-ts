import IFilter from '../Interfaces/IFilter';
import IRepository from '../Interfaces/IRepository';
import IProduct from '../Models/IProduct';

class ProductRepository implements IRepository<IProduct> {
    list(filter: IFilter): Promise<IProduct[]> {
        throw new Error('Method not implemented.');
    }
}

export default ProductRepository;
