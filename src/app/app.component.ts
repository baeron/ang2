import { Component} from '@angular/core';
       
@Component({
    selector: 'my-app',
    template: `
              <span>First example</span>
              <p *ngIf="condition">Hello Angular 5</p>
              <p *ngIf="!condition">God bay Angular 2</p>
              
              <span>Second Example</span>
              <p *ngIf="condition;else unset">Привет Angular 5 </p>
              <ng-template #unset><p>Пока мир</p></ng-template>
              
              <span>Third Example</span>
              <div *ngIf="condition; then thenBlock else elseBlock"></div>
              <ng-template #thenBlock>Then template</ng-template>
              <ng-template #elseBlock>Else template</ng-template>
              <button (click)="toggle()">Toggle</button>
              
              <ul>
                <li *ngFor="let item of items; let i = index">
                  {{i+1}}.{{item}}
                </li>
              </ul>
              
              <span>ngSwitch Example</span>
              <div [ngSwitch]="count">
                <ng-template *ngSwitchCase="1">{{count * 10}}</ng-template>
                <ng-template *ngSwitchCase="2">{{count * 100}}</ng-template>
                <ng-template ngSwitchDefault>{{count * 1000}}</ng-template>
              </div>`
})
export class AppComponent {
  count: number = 5;
  condition: boolean = true;
  toggle(){
    this.condition=!this.condition;
  }
  items = ["iPhone8", "Samsung Galaxy S8", "Sony Xperia XA1"];
}