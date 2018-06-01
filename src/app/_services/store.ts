import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Store {
    public name = 'Fiture';
    public imgUrl = 'http://103.82.241.18/admin/img/products/';
    public dataUrl = 'https://api.myjson.com/bins/ygj6m';
    public products: any;

    constructor(public http: HttpClient) {
        this.getData();
    }

    getData() {
        this.http.get<{ products: string }>(this.dataUrl)
            .subscribe(data => {
                this.products = data.products;
            })
    }
}