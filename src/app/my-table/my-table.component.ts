import { Component, OnInit } from '@angular/core';
import { Products } from './products';

const PRODUCTS: Products[] = [
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

@Component({
    moduleId: module.id,
    selector: 'my-table',
    templateUrl: 'my-table.component.html',
    styleUrls: ['my-table.component.css'],
    inputs: ['rows']
})
export class MyTable implements OnInit {
    rows: number;
    category: string;
    product: Products;
    ProductList: Products[];
    ngOnInit() {
        this.prodCopy();
    }
    delProd(product: Products): void {
        let index = this.ProductList.indexOf(product);
        if (index !== -1) {
            this.ProductList.splice(index, 1);
        }
    }
    prodCopy() {
        this.ProductList = Object.assign([], PRODUCTS).splice(0, this.rows);
    }
    getCategory(categ: string): void {
        // console.log(categ);
        // console.log(this.category);
        if (!categ) {
            this.prodCopy();
        }
        this.ProductList = Object.assign([], PRODUCTS).filter(item => item.category === parseInt(categ, 10));
    }
    addProduct(categ: string): void {
        this.product['id'] = PRODUCTS.length + 1;
        this.product['price'] = parseInt(this.product['price'], 10);
        this.product['category'] = parseInt(this.product['category'], 10);
        console.log(this.product);
        PRODUCTS.push(this.product);
        this.getCategory(categ);
    }
}
