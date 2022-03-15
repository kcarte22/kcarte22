import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-user',
  templateUrl: './track-user.component.html',
  styleUrls: ['./track-user.component.css']
})
export class TrackUserComponent implements OnInit {

  public ename : string = "Daniel"

  constructor() {
    console.log("Track user cons called")
    this.ename = "Mary"
  }

  ngOnInit(): void {
    console.log("2. Track User ngOnInit called")
    this.ename = "Taylor"
  }

  changeName(): void {
    console.log("3. Track User change name called")
    this.ename = "Adrian"
  }

}
