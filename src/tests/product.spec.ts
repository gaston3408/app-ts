import App from '../app';
import * as supertest from 'supertest';
import {beforeAll, describe, expect, test} from '@jest/globals';

describe('Start Product Test', () => {
    let app: any;
    let request: supertest.SuperAgentTest;

    beforeAll(() => {
        const server = new App();
        server.build();
        app = server.get();
        request = supertest.agent(app);
    })

    test('List Products with pagination', async() => {
        const size = 3;
        const page = 1;

        const res = await request
        .get(`/products?page=${page}&size=${size}`)
        .send();
        
        const { body: { metadata: { page: responsePage }, products }, statusCode } = res;

        expect(statusCode).toStrictEqual(200);
        expect(responsePage).toStrictEqual(page);
        expect(products).toHaveLength(size);
    })

    test('List Products with filter', async() => {
        const name = "otro";
        const currency = "USD";

        const res = await request
        .get(`/products?currency=${currency}&query=${name}`)
        .send();
        
        const { body: { products: [ product ] }, statusCode } = res;

        expect(statusCode).toStrictEqual(200);
        expect(product.currency).toStrictEqual(currency);
        expect(product.name).toStrictEqual(name);
    })
})
