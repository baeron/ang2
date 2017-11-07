import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component'
import { SecondChildComponent } from './secondChild.component';
import { ThirdChildComponent } from './thirdChild.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ChildComponent, SecondChildComponent, ThirdChildComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }