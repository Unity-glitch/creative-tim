import { Component, Output } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.css']
})
export class DashboardDetailsComponent {
  notification: any;
  isOpen = false;

  constructor(private service:ServiceService) {
    this.service.sidebarOpen$.subscribe(open => {
      this.isOpen = open
    })
  }
  ngOnInit() {

  }
  showNotification(event: any) {
    event.stopPropagation()
    this.notification = !this.notification
  }
  showNotificationTwo(event: any) {
    event.stopPropagation();
    this.notification = false;
  }
  toggleSideBar() {
    this.service.toggle()
  }

}
