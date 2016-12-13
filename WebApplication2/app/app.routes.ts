import {Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { ThirdComponent } from './third/thirdco.component';
import { fourthComponent } from './fourth/fourthco.component';

export const appRoutes: Routes = [
   
    { path: 'test', component: TestComponent },
    { path: 'third', component: ThirdComponent },
    { path: 'fourth', component: fourthComponent }
];
