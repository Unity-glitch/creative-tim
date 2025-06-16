import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-extended-forms-details',
  templateUrl: './extended-forms-details.component.html',
  styleUrls: ['./extended-forms-details.component.css'],
})
export class ExtendedFormsDetailsComponent implements OnInit {
  notification: any;
  notificationTwo: any;
  notificationThree: any;
  value: number = 50;
  defaultImage: string = '/assets/image_placeholder.jpg';
  defaultImageTwo: string = '/assets/placeholder.jpg';
  imageUrl: string;
  imageFile: File;
  imageUrlTwo: string ;
  imageFileTwo: File;
  rangeValues: number[] = [20, 80];
  changeIcon = false;
  isOpen = false;
  date: Date | undefined;
  tags: string[] = [];
  selectedCities!: City[];
  selectedCity: City | undefined;
  selectedCitiesTwo!: City[];
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  citiesTwo = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  constructor(private service: ServiceService) {
    this.service.sidebarOpen$.subscribe((open) => {
      this.isOpen = open;
    });
  }
  ngOnInit() {}

  onFileSelected(event: any) {
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl);
    }
    this.imageFile = event.target.files[0];
    this.imageUrl = URL.createObjectURL(this.imageFile);
  }
  onFileSelectedTwo(event: any) {
    if (this.imageUrlTwo) {
      URL.revokeObjectURL(this.imageUrlTwo);
    }
    this.imageFileTwo = event.target.files[0];
    this.imageUrlTwo = URL.createObjectURL(this.imageFileTwo);
  }

  deleteImage() {
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl);
    }
    this.imageUrl = '';
  }
  deleteImageTwo() {
    if (this.imageUrlTwo) {
      URL.revokeObjectURL(this.imageUrlTwo);
    }
    this.imageUrlTwo = '';
  }

  showNotification(event: any) {
    event.stopPropagation();
    this.notification = !this.notification;
  }
  cancelNotification(event: any){
    event.stopPropagation();
    this.notification = false;
  }
  showNotificationTwo() {
    this.notificationTwo = !this.notificationTwo;
  }
  showNotificationThree() {
    this.notificationThree = !this.notificationThree;
  }
  toggleSideBar() {
    this.service.toggle();
  }
}
