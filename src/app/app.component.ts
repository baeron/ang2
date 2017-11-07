import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h2>Количество кликов: {{clicks}}</h2>
            <second-comp (onChanged)="onChanged($event)"></second-comp>
            <child-comp [userName]="name" [userAge]="age"></child-comp>
            <input type="number" [(ngModel)]="age" />`
})
export class AppComponent {
  name:string='Tom';
  age:number=24;
  clicks:number = 0;
  onChanged(increased:any){
    increased == true ? this.clicks++ : this.clicks--;
  }
}