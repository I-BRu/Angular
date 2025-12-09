import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  standalone: false,
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {

  myname: string = "Krishna";
  total: number = 0;
  emi: number = 0;
  roi: any = 0;

  abc() {
    console.log("Hi Button Clicked");
  }

  xyz(uname: string) {
    this.myname = uname;
    console.log("Hi " + uname);
  }

  // Loan Type selection event
  loneType(event: any) {
    console.log(event.target.value);

    if (event.target.value == "home") {
      this.roi = 8;    // interest rate
    }
    else if (event.target.value == "edu") {
      this.roi = 5;
    }
    else if (event.target.value == "personal") {
      this.roi = 12;
    }
    else if (event.target.value == "gold") {
      this.roi = 10;
    }
    else {
      this.roi = 0;
    }
  }


  cal(p: any, t: any, r: any) {

    let P = Number(p);
    let T = Number(t);
    let R = Number(r);


    this.total = (P * T * R) / 100;

    this.emi = this.total / T;

    console.log("Total:", this.total);
    console.log("EMI:", this.emi);
  }

}
