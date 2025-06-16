import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-grid-details',
  templateUrl: './grid-details.component.html',
  styleUrls: ['./grid-details.component.css']
})
export class GridDetailsComponent {
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
