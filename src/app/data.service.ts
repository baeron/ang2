import { Injectable } from '@angular/core'
import { Phone } from './phone';
import { LogService } from './log.service';

@Injectable()
export class DataService{
  private data: Phone[] = [
    {name: "iPhone8", price: 23000},
    {name: "Galaxy S8", price: 22000},
    {name: "XPERIA XA1", price: 9000},
  ];
  constructor(private logService: LogService){}

  getData(): Phone[] {
    this.logService.write('get data')  
    return this.data;
  }
  addData(name: string, price: number){
    this.data.push(new Phone(name, price));
    this.logService.write("add data to local db")
  }
}