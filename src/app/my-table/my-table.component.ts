import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Products } from '../services/products';
import { MyService } from '../services/app.service';

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
    providers: [MyService],
    inputs: ['rows']
})
export class MyTable implements OnInit {
    rows: number;
    ProductList: Products[];
    constructor(private prodServ: MyService) {};
    ngOnInit() {
        this.prodCopy();
    }
    delProd(product: Products): void {
        const index = this.ProductList.indexOf(product);
        if (index !== -1) {
            this.ProductList.splice(index, 1);
        }
    }
    prodCopy() {
        this.ProductList = Object.assign([], PRODUCTS).splice(0, this.rows);
        // this.ProductList = Object.assign([], this.prodServ.getProdicts()).splice(0, this.rows);
    }
    getCategory(categ: string): void {
        if (!categ) {
            this.prodCopy();
        }
        this.ProductList = Object.assign([], PRODUCTS).filter(item => item.category === +categ);
    }
    addProduct(form: NgForm, categ: string): void {
        const newProduct: Products = new Products();
        newProduct.id = PRODUCTS.length + 1;
        newProduct.name = form.value.name;
        newProduct.category = +form.value.category;
        newProduct.price = +form.value.price;
        PRODUCTS.push(newProduct);
        this.prodCopy();
        this.getCategory(categ);
    }
}
