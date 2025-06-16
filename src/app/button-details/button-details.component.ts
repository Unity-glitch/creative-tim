import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-details',
  templateUrl: './button-details.component.html',
  styleUrls: ['./button-details.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ButtonDetailsComponent {
  notification = false;
  isOpen = false;
  pages = [1, 2, 3, 4, 5];
  pagesTwo = [1, 2, 3];
  pagesThree = ['Left', 'Middle', 'Right'];
  currentPage = 0;
  currentPageTwo = 0;
  currentPageThree = 0;
  @Output() toggleSettings = new EventEmitter<boolean>()


  constructor(private service: ServiceService) {
    this.service.sidebarOpen$.subscribe((open) => {
      this.isOpen = open;
    });
  }
  settingsToggle(event: any) {
    event.stopPropagation()
    this.toggleSettings.emit(event)
  }
  showNotification(event: any) {
    event.stopPropagation();
    this.notification = !this.notification;
  }
  showNotificationTwo(event: any) {
    event.stopPropagation();
    this.notification = false;
  }
  onPageClick(index: number) {
    this.currentPage = index;
  }
  onPageClickTwo(index: number) {
    this.currentPageTwo = index;
  }
  onPageClickThree(index: number) {
    this.currentPageThree = index;
  }
  toggleSideBar() {
    this.service.toggle();
  }
}
