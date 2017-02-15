import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./about/components/about.components";
import {TaskComponent} from "./todo/components/task.component";


import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule
],
    declarations: [
        AppComponent
         ],
    providers: [
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}