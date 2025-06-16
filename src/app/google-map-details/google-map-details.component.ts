import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-google-map-details',
  templateUrl: './google-map-details.component.html',
  styleUrls: ['./google-map-details.component.css']
})
export class GoogleMapDetailsComponent {
  notification: any;
    isOpen = false;
    mapUrl: SafeResourceUrl;

  
    constructor(private service: ServiceService, private sanitizer: DomSanitizer) {
      this.service.sidebarOpen$.subscribe((open) => {
        this.isOpen = open;
      });
      const lat = 37.7749;
    const lng = -122.4194;
    const url = `https://maps.google.com/maps?q=${lat},${lng}&t=k&z=12&output=embed`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
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
