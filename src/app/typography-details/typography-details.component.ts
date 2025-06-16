import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-typography-details',
  templateUrl: './typography-details.component.html',
  styleUrls: ['./typography-details.component.css'],
})
export class TypographyDetailsComponent {
  notification: any;
  isOpen = false;

  constructor(private service: ServiceService) {
    this.service.sidebarOpen$.subscribe((open) => {
      this.isOpen = open;
    });
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
