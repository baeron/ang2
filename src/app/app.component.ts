import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'my-app',
  template: `<child-comp>
                <h3 #headerContent>Добро пожаловать {{name}}!</h3>
            </child-comp>`
})
export class AppComponent {
  name: string = "Baer";
}