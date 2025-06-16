import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-regular-form-details',
  templateUrl: './regular-form-details.component.html',
  styleUrls: ['./regular-form-details.component.css']
})
export class RegularFormDetailsComponent {
  notification = false;
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
