import { Component} from '@angular/core';

@Component({
selector: 'my-app',
template: `<div [ngStyle]="{'font-size':'13px', 'font-family': 'Verdana'}">
             <h1>Hello Angular 5</h1>
             <p [ngStyle]="{'font-size':'14px', 'font-family':'Segeo Print'}">
                 Angular 5 представляет модульную архитектуру приложения
             </p>
         </div>`
})
export class AppComponent { }