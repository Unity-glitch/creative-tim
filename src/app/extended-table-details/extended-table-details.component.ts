import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-extended-table-details',
  templateUrl: './extended-table-details.component.html',
  styleUrls: ['./extended-table-details.component.css'],
})
export class ExtendedTableDetailsComponent {
  notification: any;
  isOpen = false;
  numberCount: any;
  result1: any;
  result2: any;
  result3: any;
  price1 = 49;
  number1 = 0;
  price2 = 25;
  number2 = 0;
  price3 = 35;
  number3 = 0;
  totalValues: any;

  constructor(private service: ServiceService) {
    this.service.sidebarOpen$.subscribe((open) => {
      this.isOpen = open;
    });
    this.displayTotal();
  }
  ngOnInit() {
    this.result1 = this.price1 * this.number1;
    this.result2 = this.price2 * this.number2;
    this.result3 = this.price3 * this.number3;
    this.displayTotal();
  }

  minus1() {
    if (this.number1 > 0) {
      this.number1--;
    }
    this.result1 = this.price1 * this.number1;
    this.displayTotal();
  }

  minus2() {
    if (this.number2 > 0) {
      this.number2--;
    }
    this.result2 = this.price2 * this.number2;
    this.displayTotal();
  }

  minus3() {
    if (this.number3 > 0) {
      this.number3--;
    }
    this.result3 = this.price3 * this.number3;
    this.displayTotal();
  }

  plus1() {
    this.number1++;
    this.result1 = this.price1 * this.number1;
    this.displayTotal();
  }
  plus2() {
    this.number2++;
    this.result2 = this.price2 * this.number2;
    this.displayTotal();
  }

  plus3() {
    this.number3++;
    this.result3 = this.price3 * this.number3;
    this.displayTotal();
  }

  displayTotal() {
    this.totalValues = this.result1 + this.result2 + this.result3;
  }

  showNotification(event: any) {
    event.stopPropagation();
    this.notification = !this.notification;
  }
  showNotificationTwo(event: any) {
    event.stopPropagation();
    this.notification = false;
  }
  toggleSideBar() {
    this.service.toggle();
  }
}
