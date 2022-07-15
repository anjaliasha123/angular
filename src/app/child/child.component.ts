import { Component, OnInit, OnDestroy } from "@angular/core";
import { setInterval, clearInterval } from "timers";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html"
})
export class ChildComponent implements OnInit, OnDestroy {
  counter: number = 0;
  interval: any;
  constructor() {
    console.log("Child Constructor");
  }
  ngOnInit(): void {
    console.log("Child ngOnInit()");
    this.interval = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
    }, 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log("Child is destroyed");
  }
}
