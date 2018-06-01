import { Component } from '@angular/core';
import { Store } from './_services/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nameValue = '';

  constructor(public store: Store){}

  saveName(){
    this.store.name = this.nameValue;
  }
}
