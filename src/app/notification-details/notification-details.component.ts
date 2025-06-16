import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css'],
  standalone: true,
  imports: [ToastModule, ButtonModule, RippleModule, CommonModule, CalendarModule],
  providers: [MessageService],
})
export class NotificationDetailsComponent {
  notification = false;
  id: any;
  isOpen = false;
  date: Date;
  showModal = false;
  showAffiliate = false;
  showConfirmation = false;
  deleteTab: boolean = true;
  deleteOne = true;
  deleteTwo = true;
  deleteThree = true;
  deleteFour = true;
  deleteFive = true;
  deleteSix = true;
  deleteSeven = true;
  deleteEight = true;
  deleteNine = true;

  constructor(
    private service: ServiceService,
    private messageService: MessageService
  ) {
    this.service.sidebarOpen$.subscribe((open) => {
      this.isOpen = open;
    });
  }
  delete(id: number) {
    switch (id) {
    case 1:
      this.deleteOne = false
      break;
    case 2:
      this.deleteTwo = false
      break;
    case 3:
      this.deleteThree = false
      break;
    case 4:
      this.deleteFour = false
      break;
    case 5:
      this.deleteFive = false
      break;
    case 6:
      this.deleteSix = false
      break;
    case 7:
      this.deleteSeven = false
      break;
    case 8:
      this.deleteEight = false
      break;
    case 9:
      this.deleteNine = false
      break;
  
    default:
      break;
  }
  }
  

  
  notice() {
    this.showAffiliate = !this.showAffiliate;
  }
  closeTwo() {
    this.showAffiliate = false;
  }
  closeThree() {
    this.showConfirmation = false;
  }
  alert() {
    this.showConfirmation = !this.showConfirmation
  }

  classic() {
    this.showModal = !this.showModal
  }
  close() {
    this.showModal  = false
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
  showTopLeft() {
    this.messageService.add({
      severity: 'error',
      detail:
        'Welcome to Material Dashboard - a beautiful dashboard for every web developer.',
      key: 'tl',
      life: 3000,
    });
  }
  showTopCenter() {
    this.messageService.add({
      severity: 'success',
      detail: 'Welcome to Material Dashboard - a beautiful dashboard for every web developer.',
      key: 'tc',
      life: 3000,
    });
  }
  showTopRight() {
    this.messageService.add({
      severity: 'info',
      detail: 'Welcome to Material Dashboard - a beautiful dashboard for every web developer.',
      key: 'tr',
      life: 3000,
    });
  }

  showBottomLeft() {
    this.messageService.add({
      severity: 'error',
      detail: 'Welcome to Material Dashboard - a beautiful dashboard for every web developer.',
      key: 'bl',
      life: 3000,
    });
  }
  showBottomCenter() {
    this.messageService.add({
      severity: 'info',
      detail: 'Welcome to Material Dashboard - a beautiful dashboard for every web developer.',
      key: 'bc',
      life: 3000,
    });
  }

  showBottomRight() {
    this.messageService.add({
      severity: 'warn',
      detail: 'Welcome to Material Dashboard - a beautiful dashboard for every web developer.',
      key: 'br',
      life: 3000,
    });
  }
}
