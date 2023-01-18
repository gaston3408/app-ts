import express = require("express");
import {controller, httpGet, BaseHttpController} from 'inversify-express-utils';
import ListProductService from '../Services/ListProductService';
import IFilter from '../Interfaces/IFilter';
import { getMetadata } from '../Utils/methods';

@controller('/')
class ProductController extends BaseHttpController
{
    @httpGet('products')
	public async list(req: express.Request, res: express.Response, next: express.NextFunction) 
    {
        const filter = {};
        const service = new ListProductService();
        const products = await service.list(filter as IFilter);
        const metadata = getMetadata(filter as IFilter, products)
        res.status(200).json({metadata, products});
    }
}

export default ProductController;