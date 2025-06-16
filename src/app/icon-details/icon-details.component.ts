import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-icon-details',
  templateUrl: './icon-details.component.html',
  styleUrls: ['./icon-details.component.css'],
})
export class IconDetailsComponent {
  notification : boolean = false;
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
