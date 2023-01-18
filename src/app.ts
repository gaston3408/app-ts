import 'reflect-metadata';
import * as express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import './Controllers/ProductController';
import container from './inversify.config';

class App
{
    public port?: number;
    private server: InversifyExpressServer;
    private app: express.Application;

    constructor()
    {
        this.port = 8089;
        this.server = new InversifyExpressServer(container as any);
    }

    public build()
    {
        this.app = this.server.build();
    }

    public listen()
    {
        this.app.listen(this.port, () =>
        {
            console.log(`listening on port ${this.port}`);
        });
    }

    public get()
    {
        return this.app;
    }
}

export default App;