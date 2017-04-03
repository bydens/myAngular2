import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable()
export class MyService {
    private products: Products[] = [
        { id: 1, name : 'product 1', category: 1, price : 100 },
        { id: 2, name : 'product 2', category: 2, price : 200 },
        { id: 3, name : 'product 3', category: 2, price : 300 },
        { id: 4, name : 'product 4', category: 1, price : 400 },
        { id: 5, name : 'product 5', category: 3, price : 500 },
        { id: 6, name : 'product 6', category: 2, price : 600 },
        { id: 7, name : 'product 7', category: 1, price : 700 },
        { id: 8, name : 'product 8', category: 3, price : 800 },
        { id: 9, name : 'product 9', category: 3, price : 900 },
        { id: 10, name : 'product 10', category: 1, price : 1000 }
    ];
    getProdicts(): Products[] {
        return this.products;
    };
    addProduct(product: Products): void {
        this.products.push(product);
    };
    delProduct(product: Products): void {
        let index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    };
    lengthProdList(): number {
        return this.products.length + 1;
    }
}
