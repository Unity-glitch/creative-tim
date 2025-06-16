import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  settings: boolean = false;
  @Output() imageSelected = new EventEmitter<string>();
  @Output() toggleBackgroundImage = new EventEmitter<boolean>();
  @Output() toggleMenuBar = new EventEmitter<boolean>();
  @Output() changeBackgroundColor = new EventEmitter<string>();
  @Output() bgColorChange = new EventEmitter<string>();

  constructor() {}
  selectBgColor(bgColor: string) {
    this.bgColorChange.emit(bgColor);
  }
  selectImage(imagePath: string) {
    this.imageSelected.emit(imagePath);
  }
  selectColor(colorChange: string) {
    this.changeBackgroundColor.emit(colorChange);
  }
  closeSettings() {
    this.settings = false;
  }
  showSettings(event: any) {
    event.stopPropagation();
    this.settings = !this.settings;
  }
  toggleImage(event: any) {
    this.toggleBackgroundImage.emit(event);
  }
  toggleSideMenu(event: any) {
    this.toggleMenuBar.emit(event);
  }
  close() {
    this.settings = !this.settings;
  }
}
