import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ListsModule, routs } from './lists/index';

@NgModule({
    imports: [
        BrowserModule,
        ListsModule,
        RouterModule.forRoot(routs)
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
