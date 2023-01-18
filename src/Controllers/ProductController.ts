import express = require("express");
import {controller, httpGet, BaseHttpController} from 'inversify-express-utils';
import ListProductService from '../Services/ListProductService';

@controller('/')
class ProductController extends BaseHttpController
{
    @httpGet('products')
	public async list(req: express.Request, res: express.Response, next: express.NextFunction) 
    {
        const service = new ListProductService();
        const products = await service.list(null);
        res.status(200).json(products);
    }
}

export default ProductController;