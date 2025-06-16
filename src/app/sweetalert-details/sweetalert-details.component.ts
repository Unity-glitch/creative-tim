import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sweetalert-details',
  templateUrl: './sweetalert-details.component.html',
  styleUrls: ['./sweetalert-details.component.css']
})
export class SweetalertDetailsComponent {
   notification = false;
    isOpen = false;
    showConfirmation = false;
    showConfirmationTwo = false;
    showConfirmationThree = false;
    showConfirmationFour = false;
    successModal = false;
    warningMessage = false;
    deleteModal = false;
    inputModal = false;
    inputDetailsModal = false;
    data: any

  
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
      event.stopPropagation();
      this.notification = false;
    }
    toggleSideBar() {
      this.service.toggle();
    }
    check() {
      this.showConfirmation = !this.showConfirmation
    }
    checkTwo() {
      this.showConfirmationTwo = !this.showConfirmationTwo
    }
    checkThree() {
      this.showConfirmationThree = !this.showConfirmationThree
    }
    checkFour() {
      this.showConfirmationFour = !this.showConfirmationFour
      setTimeout(() => {
        this.showConfirmationFour = false;
      }, 2000)
    }
    close() {
      this.showConfirmation = false;
    }
    closeTwo() {
      this.showConfirmationTwo = false;
    }
    closeThree() {
      this.showConfirmationThree = false;
    }
    success() {
      this.successModal = !this.successModal;
    }
    cancel() {
      this.successModal = false
    }
    cancelThree() {
      this.warningMessage = false
    }
    cancelFour() {
      this.inputModal = false;
    }
    accept() {
    }
    confirm() {
      this.warningMessage = !this.warningMessage
    }
    confirmTwo() {
      this.warningMessage = !this.warningMessage
    }
    delete() {
      this.deleteModal = !this.deleteModal;
      this.warningMessage = false;
    }
    cancelTwo() {
      this.deleteModal = false;
    }
    inputCheck() {
      this.inputModal = !this.inputModal;
    }
    saveData() {
      this.inputModal = false;
      this.inputDetailsModal = !this.inputDetailsModal;
    }
    acceptTwo() {
      this.inputDetailsModal = false;
    }
    

}
