import { Component} from '@angular/core';
       
@Component({
    selector: 'my-app',
    template: `<div [ngClass]="{invisible: visibility}">
                  <h1>Hello Angular 5</h1>
                  <p>
                    Angular 5 представляет модульную архитектуру приложения
                  </p>
                </div>
                <button (click)="toggle()">Toggle</button>`,
    styles: [ `.invisible{display:none}` ]
})
export class AppComponent {
  visibility: boolean = true;
  toggle() {
    this.visibility=!this.visibility;
  }
}