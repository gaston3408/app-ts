import IFilter from '../Interfaces/IFilter';
import * as express from 'express';

class ProductRequestFilter implements IFilter {
    private request: express.Request;
    
    constructor(request: express.Request)
    {
        this.request = request;
    }

    getSize(): number {
        return this.request.query?.size ? parseInt(this.request.query.size as string, 10) : null;
    }
    
    getPage(): number {
        return this.request.query?.page ? parseInt(this.request.query.page as string, 10) : null;
    }
}

export default ProductRequestFilter;
