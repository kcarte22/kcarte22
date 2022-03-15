import { Component } from "@angular/core";


@Component({
  selector: 'cust-app',
  template : `<hr><h1>Customer App</h1>

              <h3>{{customerName}}</h3>
              <h4>{{2 + 5}}</h4>`
})
export class CustomerComponent
{
  customerName:String = "Richard"
  billAmount: number = 0;

  constructor() {
    
    this.customerName = "Daniel"
    this.billAmount = 960000

  }
}
