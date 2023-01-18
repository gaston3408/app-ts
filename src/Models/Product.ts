import IProduct from './IProduct';

class Product implements IProduct {
    id: number;
    name: string;
    image: string;
    price: number;
    currency: string;
    quantity: number;
}

export default Product;
