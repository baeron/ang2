import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { BoldDirective } from './bold.directive';
import { ItalicDirective } from './italic.directive';
import { TextDecaration } from './text_decaration.directive';
import { WhileDirective } from './while.directive';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ChildComponent, BoldDirective, ItalicDirective, TextDecaration, WhileDirective ],
  bootstrap: [AppComponent]
})
export class AppModule { }