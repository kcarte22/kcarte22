import { Component } from "@angular/core";


@Component({
  selector: 'cust-app',
  template : `<hr><h1>Customer App</h1>

              <h3>{{customerName}}</h3>
              <h4>{{2 + 5}}</h4>
              <input type="text" [value]="customerName">
              <br>
              <img [src]="imageUrl">`
})
export class CustomerComponent
{
  customerName: string = "Richard"
  billAmount: number = 0;
  imageUrl: string  = "https://picsum.photos/200/300"

  constructor() {
    // this.customerName = "Daniel"
    this.billAmount = 960000
  }

  sayHell() {
    this.customerName = "William"

  }

  sayBye() {

  }
}
