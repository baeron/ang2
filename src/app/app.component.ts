import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { LogService } from './log.service';
import { Phone } from './phone';
       
@Component({
    selector: 'my-app',
    template: `<data-comp></data-comp>
              <data-comp></data-comp>`
})
export class AppComponent {}