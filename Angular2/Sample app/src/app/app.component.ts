import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app",
    template: `
    <h1> Hi !!!  I am App Component</h1>
    `
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}