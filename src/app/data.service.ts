import { Phone } from './phone';
export class DataService{
  private data: Phone[] = [
    {name: "iPhone8", price: 23000},
    {name: "Galaxy S8", price: 22000},
    {name: "XPERIA XA1", price: 9000},
  ];
  getData(): Phone[] {
      return this.data;
  }
  addData(name: string, price: number){
      this.data.push(new Phone(name, price));
  }
}