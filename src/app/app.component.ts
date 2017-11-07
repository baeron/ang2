import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'my-app',
  template: `<child-comp></child-comp>
            <button (click)="increment()">+</button>
            <button (click)="decrement()">-</button>
  `
})
export class AppComponent {
  name:string='Tom';

  @ViewChild(ChildComponent)
  private counterCompomemt: ChildComponent;

  increment() {this.counterCompomemt.increment(); }
  decrement() {this.counterCompomemt.decrement(); }
}