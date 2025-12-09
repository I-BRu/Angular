import { Component } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  standalone: false,
  templateUrl: './directivedemo.html',
  styleUrl: './directivedemo.css',
})
export class Directivedemo {
  ch = true;
  emp = ["bindu", "Chandu", "anu", "siindhu"];
  fruits = ["Apple ", "Banana", "cherry"];

  addFruit(fru: any) {
    this.fruits.push(fru);
  }

  color = "";
  role: string = '';
}
