import { Component} from '@angular/core';

@Component({
selector: 'my-app',
template: `<div [ngClass]="{verdanaFont:true}">
             <h1>Hello Angular 2</h1>
             <p [ngClass]="{verdanaFont:false, segoePrintFont:true}">
                 Angular 5 представляет модульную архитектуру приложения
             </p>
         </div>`,
styles: [
 `.verdanaFont{font-size:13px; font-family:Verdana;}
 .segoePrintFont{font-size:14px; font-family:"Segoe Print";}`
]
})
export class AppComponent { }