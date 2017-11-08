import { Component, OnInit } from '@angular/core';

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
                  <input class="form-control" name="title" [(ngModel)]="phone.title" />
                </div>
                <div class="form-group">
                  <label>Price</label>
                  <input type="number" class="form-control" name="price" [(ngModel)]="phone.price" />
                </div>
                <div class="form-group">
                  <label>Company</label>
                  <select class="form-control" name="company" [(ngModel)]="phone.company">
                    <option *ngFor="let comp of companies" [value]="comp">
                      {{comp}}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <button class="btn btn-default"(click)="addPhone(title, price, company)">
                    Add
                  </button>
                </div>
              </div>
              <div>
                <h3>Added elements</h3>
                <ul *ngFor="let p of phones">
                  <li>{{p.title}} ({{p.company}})-{{p.price}}</li>
                </ul>
              </div>`
})
export class AppComponent {
  phone: Phone = new Phone("", 0, "Apple");
  phones: Phone[] = [];
  companies: string[] = ["Apple", "Xiaomi", "Samsung", "LG"];

  addPhone(){
    this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
  }
}