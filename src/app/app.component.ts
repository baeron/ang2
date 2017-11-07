import { Component} from '@angular/core';
       
@Component({
    selector: 'my-app',
    template: `<div>
                <p bold>Hello Angular 5</p>
                <p [italic]="'28px'" [defaultSize]="'14px'">God bay Angular 2</p>
                <p underline> Angular JS is dead </p>
              </div>`
})
export class AppComponent {
}