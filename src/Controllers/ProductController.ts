import {controller, httpGet, BaseHttpController} from 'inversify-express-utils';
import ListProductService from '../Services/ListProductService';
import IFilter from '../Interfaces/IFilter';
import { getMetadata } from '../Utils/methods';
import * as express from 'express';
import ProductRequestFilter from '../Requests/ProductRequestFilter';

@controller('/')
class ProductController extends BaseHttpController
{
    @httpGet('products')
	public async list(req: express.Request, res: express.Response, next: express.NextFunction) 
    {
        const filter = new ProductRequestFilter(req);
        
        const service = new ListProductService();
        const products = await service.list(filter);
        const metadata = getMetadata(filter, products);
        res.status(200).json({metadata, products});
    }
}

export default ProductController;