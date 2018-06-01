import { Component } from "@angular/core";
import { Store } from "../../_services/store";

@Component({
    selector: 'main',
    templateUrl: './main.component.html'
})

export class MainComponent {
    constructor(public store: Store) {}
}