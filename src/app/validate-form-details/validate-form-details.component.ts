import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validate-form-details',
  templateUrl: './validate-form-details.component.html',
  styleUrls: ['./validate-form-details.component.css']
})
export class ValidateFormDetailsComponent {
   notification = false;
    isOpen = false;
    myForm: any
    passwordCheck: any
    email = new FormControl('', [Validators.required, Validators.email]);
    emailTwo = new FormControl('', [Validators.required, Validators.email]);
    emailThree = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl ('', Validators.required)
    passswordTwo = new FormControl ('', Validators.required)
    confirmPassword = new FormControl ('', Validators.required)
    requiredText = new FormControl ('', Validators.required)
    number = new FormControl ('', Validators.required)
    url = new FormControl ('', Validators.required)
    idSource = new FormControl ('', Validators.required)
    idDestination = new FormControl ('', Validators.required)
  
    constructor(private service: ServiceService) {
      this.service.sidebarOpen$.subscribe((open) => {
        this.isOpen = open;
      });
    }

    ngOnInit() {
      this.myForm = new FormGroup ({
        email: this.email,
        emailTwo: this.emailTwo,
        emailThree: this.emailThree,
        requiredText: this.requiredText,
        url: this.url,
        number: this.number,
        idSource: this.idSource,
        idDestination: this.idDestination,
        password: this.password,
        passswordTwo: this.passswordTwo,
        confirmPassword: this.confirmPassword
      })
      if (this.password != this.confirmPassword) {
        this.passwordCheck = 'password does not match'
      }
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
