import { Component } from '@angular/core';


@Component({
    selector: "my-app",
    template: `<h1>My First Angular App</h1>
               <a routerLink="test">test</a>
               <a routerLink="third">Home</a>
               <a routerLink="fourth">Item</a>
<div>              
              <router-outlet></router-outlet>
</div>`
    
   
}) 
export class AppComponent { }
