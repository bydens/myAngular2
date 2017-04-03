import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MyTable } from './my-table/my-table.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, MyTable ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
