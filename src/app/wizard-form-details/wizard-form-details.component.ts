import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wizard-form-details',
  templateUrl: './wizard-form-details.component.html',
  styleUrls: ['./wizard-form-details.component.css'],
})
export class WizardFormDetailsComponent {
  notification = false;
  isOpen = false;
  myForm: any;
  errorText: any;
  about = true;
  account = false;
  address = false;
  dropdownCity = false;
  imageUrl: string | null = null;
  imageFile: any;
  defaultImage = 'assets/default-avatar.png'
  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(20),
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(20),
  ]);
  iconOne = {
    selected: false,
  };
  iconTwo = {
    selected: false,
  };
  iconThree = {
    selected: false,
  };

  constructor(private service: ServiceService) {
    this.service.sidebarOpen$.subscribe((open) => {
      this.isOpen = open;
    });
  }
  ngOnInit() {
    this.myForm = new FormGroup({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }
  selectFile(event: any) {
    if(this.imageUrl){
      URL.revokeObjectURL(this.imageUrl)
    }
    this.imageFile = event.target.files[0]
    this.imageUrl= URL.createObjectURL(this.imageFile)
  }
  selectCity() {
    this.dropdownCity = !this.dropdownCity;
  }
  previous() {
    this.about = true;
    this.account = false;
  }
  previousTwo() {
    this.account = true;
    this.address = false;
  }
  next() {
    if (this.email?.invalid || this.firstName?.invalid || this.lastName?.invalid) {
      this.errorText = 'Email not valid'
      alert('Enter valid names')
      this.about = true 
      this.account = false      
    } else {
      this.about = false;
      this.account = true;
      this.errorText = ''
    }
  }
  nextTwo() {
    this.address = true;
    this.account = false;
  }
  showNotification(event: any) {
    event.stopPropagation()
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
