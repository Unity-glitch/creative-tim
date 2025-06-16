import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-full-screen-map-details',
  templateUrl: './full-screen-map-details.component.html',
  styleUrls: ['./full-screen-map-details.component.css'],
})
export class FullScreenMapDetailsComponent {
  notification: any;
  isOpen = false;
  mapUrl: SafeResourceUrl;
  lat: number;
  lng: number;
  url: string;

  constructor(
    private service: ServiceService,
    private sanitizer: DomSanitizer
  ) {
    this.service.sidebarOpen$.subscribe((open) => {
      this.isOpen = open;
    });
    this.lat = 37.7749;
    this.lng = -122.4194;
    this.url = `https://maps.google.com/maps?q=${this.lat},${this.lng}&t=k&z=12&output=embed`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
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
