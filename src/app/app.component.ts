import { Component, OnInit } from '@angular/core';
import { NgModel} from '@angular/forms';

export class Phone{
  constructor(
    public title:string, 
    public price: number, 
    public company: string)
  {}
}

@Component({
    selector: 'my-app',
    template: `<div class="col-xs-10">
                <div class="form-group">
                  <label>Model name</label>
                  <input class="form-control" name="title" [(ngModel)]="phone.title" #phoneTitle="ngModel" (ngModelChange)="onTitleChange()" />
                </div>
                <div class="form-group">
                  <label>Price</label>
                  <input type="number" class="form-control" name="price" [(ngModel)]="phone.price" #phonePrice="ngModel" />
                </div>
                <div class="form-group">
                  <label>Company</label>
                  <select class="form-control" name="company" [(ngModel)]="phone.company" #phoneCompany="ngModel">
                    <option *ngFor="let comp of companies" [value]="comp">
                      {{comp}}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <button class="btn btn-default"(click)="addPhone(phoneTitle, phonePrice, phoneCompany)">
                    Add
                  </button>
                </div>
              </div>
              <div>
                <p>{{phoneTitle.name}} : {{phoneTitle.model}}</p>
                <p>{{phonePrice.name}} : {{phonePrice.model}}</p>
                <p>{{phoneCompany.name}} : {{phoneCompany.model}}</p>
              </div>`
})
export class AppComponent {
  phone: Phone = new Phone("", 0, "Apple");
  phones: Phone[] = [];
  companies: string[] = ["Apple", "Xiaomi", "Samsung", "LG"];

  addPhone(title:NgModel, price:NgModel, comp:NgModel){
    console.log(title);
    console.log(price);
    console.log(comp);
  }

  onTitleChange(){
    if(this.phone.title === "нет"){
      this.phone.title = "NoName";
    }
  }
}