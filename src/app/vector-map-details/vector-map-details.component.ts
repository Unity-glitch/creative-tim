import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-vector-map-details',
  templateUrl: './vector-map-details.component.html',
  styleUrls: ['./vector-map-details.component.css']
})
export class VectorMapDetailsComponent {
  notification: any;
    isOpen = false;
  
    constructor(private service: ServiceService) {
      this.service.sidebarOpen$.subscribe((open) => {
        this.isOpen = open;
      });
    }
    showNotification(event: any) {
      event.stopPropagation()
      this.notification = !this.notification;
    }
    showNotificationTwo(event: any){
      event.stopPropagation()
      this.notification = false;
    }
    toggleSideBar() {
      this.service.toggle();
    }

}
