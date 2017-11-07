import { Component, ViewChild } from '@angular/core';
//import { ChildComponent } from './child.component';

@Component({
  selector: 'my-app',
  template: `<child-comp #counter></child-comp>
            <button (click)="counter.increment()">+</button>
            <button (click)="counter.decrement()">-</button>
  `
})
export class AppComponent {
  name:string='Tom';
}