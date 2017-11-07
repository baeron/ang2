import { Component,
         Input,
         OnInit,
         DoCheck,
         OnChanges,
         AfterContentInit,
         AfterContentChecked,
         AfterViewChecked,
         AfterViewInit } from '@angular/core';
@Component({
  selector: 'child-comp',
  template: `<p>Привет {{name}}</p>`
})
export class ChildComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
  @Input() name: string;
  count:number=1;

  ngOnInit() { this.log(`onInit`); }
  ngOnChanges() {this.log(`onChanges`); }
  ngDoCheck() {this.log(`DoCheck`); }
  ngAfterContentInit() {this.log(`AfterContentInit`); }
  ngAfterContentChecked() {this.log(`AfterContentChecked`); }
  ngAfterViewChecked() {this.log(`AfterViewChecked`); }
  ngAfterViewInit() {this.log(`AfterViewInit`); }




  private log(msg: string) {
    console.log(this.count + " . " + msg);
    this.count++;
  }
}