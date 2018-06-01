import { Component } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Store } from "../../_services/store";

@Component({
    selector: 'card-detail',
    templateUrl: './card-detail.component.html'
})

export class CardDetailComponent {
    public data;
    public id;

    constructor(public router: Router, public store: Store, public activatedRoute: ActivatedRoute) {
        if (this.store.products) {
            this.activatedRoute.params.subscribe((params: Params) => {
                this.id = params['id'];
                this.data = this.store.products.filter((prod) => {
                    return prod.id == this.id;
                })
                console.log(this.data)
            })
        }
        else{
            this.back();
        }
    }

    back(){
        this.router.navigateByUrl('/')
    }
}