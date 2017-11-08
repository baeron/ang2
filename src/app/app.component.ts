import { Component} from '@angular/core';
       
@Component({
    selector: 'my-app',
    template: `<span>Structure directiv example</span>
              <p *while="condition">Hello Angular 5</p>
              <p *while="!condition">God bay Angular 2</p>
              <button (click)="toggle()">Toggle</button>`
})
export class AppComponent {
  condition: boolean = true;
  toggle(){
    this.condition=!this.condition;
  }
}