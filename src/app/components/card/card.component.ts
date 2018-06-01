import { Component, Input } from "@angular/core";
import { Store } from "../../_services/store";

@Component({
    selector: 'card',
    templateUrl: './card.component.html'
})

export class CardComponent{
    @Input() data;

    constructor(public store: Store){}
}