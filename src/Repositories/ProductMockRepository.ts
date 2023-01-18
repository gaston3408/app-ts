import IFilter from '../Interfaces/IFilter';
import IRepository from '../Interfaces/IRepository';
import IProduct from '../Models/IProduct';
import products from '../data/products'

class ProductMockRepository implements IRepository<IProduct> {
    async list(filter: IFilter): Promise<IProduct[]> {
        let productFiltered = products;
        const page = filter.getPage();
        const size = page ? filter.getSize() * page : filter.getSize();
        const firtSize = size - filter.getSize();

        if(size)
        {
            productFiltered = products.filter((prod, index: number) => {
                // @ts-ignore
                if(index < size & index >= firtSize){
                    return prod;
                }
            })
        }

        return await Promise.resolve(
            productFiltered
        );
    }
}

export default ProductMockRepository;
