import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html"
})
export class ParentComponent implements OnInit {
  isChild: boolean = false;
  constructor() {
    console.log("Parent Constructor");
  }
  ngOnInit(): void {
    console.log("Parent ngOnInit()");
  }
  toggleChild() {
    this.isChild = !this.isChild;
  }
}
