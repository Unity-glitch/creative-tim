import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-regular-table-details',
  templateUrl: './regular-table-details.component.html',
  styleUrls: ['./regular-table-details.component.css']
})
export class RegularTableDetailsComponent {
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
    showNotificationTwo(event: any){
      event.stopPropagation();
      this.notification = false;
    }
    toggleSideBar() {
      this.service.toggle();
    }

}
