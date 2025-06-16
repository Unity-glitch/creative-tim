import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css'],
})
export class WidgetDetailsComponent {
  notification: any;
  isOpen = false;
  bgActive = 'two';
  activeTabIdFour = 'description';

  constructor(private service: ServiceService) {
    this.service.sidebarOpen$.subscribe((open) => {
      this.isOpen = open;
    });
  }
  viewTabFour(tabIdFour: any) {
    this.activeTabIdFour = tabIdFour;
  }
  activeBackground(activeCard: any) {
    this.bgActive = activeCard;
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
