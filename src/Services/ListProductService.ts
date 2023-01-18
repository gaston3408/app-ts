import IFilter from '../Interfaces/IFilter';
import IProduct from '../Models/IProduct';
import IRepository from '../Interfaces/IRepository';
import ProductRepositoryFactory from '../Factories/ProductRepositoryFactory';

class ListProductService {

    private repository: IRepository<IProduct>;

    constructor()
    {
        this.repository = ProductRepositoryFactory.getInstance();
    }

    async list(filter: IFilter): Promise<IProduct[]> 
    {
        return await this.repository.list(filter);
    }
}

export default ListProductService;
