import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<child-comp [name]="name"></child-comp>
            <input type="text" [(ngModel)]="name" />`
})
export class AppComponent {
  name:string='Tom';
}