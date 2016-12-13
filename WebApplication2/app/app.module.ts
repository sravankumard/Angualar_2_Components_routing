import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { ThirdComponent } from './third/thirdco.component';
import { fourthComponent } from './fourth/fourthco.component';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes, { useHash: true })],   
  declarations: [AppComponent, TestComponent, ThirdComponent, fourthComponent],
 // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
