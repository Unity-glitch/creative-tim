import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, RouterModule } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  animations: [
    trigger('expand', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('200ms ease-in-out')),
    ]),
  ],
})
export class SideMenuComponent {
  isOpen = true;
  menuOpen = true
  backgroundImage = '/assets/sidebar-3.jpg';
  backgroundColor = 'rgba(0, 0, 100, 1.0)';
  sideMenuBgColor = 'rgba(34, 139, 34, 0.8)';
  showBackgroundImage: boolean = false;
  showSideMenuBar: boolean = false;
  

  menus = [
    {
      expanded: false,
      submenus: [],
    },
  ];
  menusTwo = [
    {
      expanded: false,
      submenus: [],
    },
  ];
  menusThree = [
    {
      expanded: false,
      submenus: [],
    },
  ];
  menusFour = [
    {
      expanded: false,
      submenus: [],
    },
  ];

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
    this.service.sidebarOpen$.subscribe((open) => {
      this.isOpen = !open;
    });
  }


  activeBackground(route: string){
    return this.router.url.includes(route)
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    
  }
  extendedTable() {
    this.menuOpen = false
    this.router.navigateByUrl('tables/extended')
  }
  regularTable() {
    this.menuOpen = false
    this.router.navigateByUrl('tables/regular')
  }
  vectorMap(){
    this.menuOpen = false
    this.router.navigateByUrl('maps/vector')
  }
  fullMap() {
    this.menuOpen = false
    this.router.navigateByUrl('maps/fullscreen')
  }
  map() {
    this.menuOpen = false
    this.router.navigateByUrl('maps/google')
  }
  wizardForm() {
    this.menuOpen = false
    this.router.navigateByUrl('forms/wizard')
  }
  validateForm() {
    this.menuOpen = false
    this.router.navigateByUrl('forms/validation')
  }
  extendedForm() {
    this.menuOpen = false
    this.router.navigateByUrl('forms/extended')
  }
  regularForm() {
    this.menuOpen = false
    this.router.navigateByUrl('forms/regular')
  }
  table() {
    this.menuOpen = false
    this.router.navigateByUrl('');
  }
  document() {
    this.menuOpen = false
    window.location.href =
      'https://demos.creative-tim.com/material-dashboard-pro-angular2/#/documentation/tutorial';
  }
  widget() {
    this.menuOpen = false
    this.router.navigateByUrl('widgets');
  }
  sweetAlert() {
    this.menuOpen = false
    this.router.navigateByUrl('components/sweet-alert');
  }
  dropDown(menu: any) {
    menu.expanded = !menu.expanded;
  }
  dropDownTwo(menu: any) {
    menu.expanded = !menu.expanded
  }
  dropDownThree(menu: any) {
    menu.expanded = !menu.expanded
  }
  dropDownFour(menu: any) {
    menu.expanded = !menu.expanded
  }
  button() {
    this.menuOpen = false
    this.router.navigateByUrl('components/button');
  }
  grid() {
    this.menuOpen = false
    this.router.navigateByUrl('components/grid');
  }
  typography() {
    this.menuOpen = false
    this.router.navigateByUrl('components/typography');
  }
  panel() {
    this.menuOpen = false
    this.router.navigateByUrl('components/panel');
  }
  icon() {
    this.menuOpen = false
    this.router.navigateByUrl('components/icon');
  }
  notification() {
    this.menuOpen = false
    this.router.navigateByUrl('components/notification');
  }
  dashboard() {
    this.menuOpen = !this.menuOpen
    this.router.navigateByUrl('dashboard-details');
  }
  onImageSelected(imagePath: string) {
    this.backgroundImage = imagePath;
  }
  onSelectColor(color: string) {
  switch (color) {
    case 'blue':
      this.backgroundColor = 'rgba(0, 0, 100, 1.0)';
      break;
    case 'red':
      this.backgroundColor = 'rgba(80, 0, 0, 1.0)';
      break;
    case 'black':
      this.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      break;
    default:
      this.backgroundColor = 'rgba(0, 0, 100, 1.0)';
  }
}

  onChangeImage(changeImage: boolean) {
    if (this.showBackgroundImage != this.showBackgroundImage) {
      this.showBackgroundImage = changeImage;
    } else {
      this.showBackgroundImage = !this.showBackgroundImage;
    }
  }
  onChangeSideBarMenu() {
    this.service.toggle()
  }
  onBgColor(bgColorChange: string){
    switch(bgColorChange){
      case 'blue':
      this.sideMenuBgColor = 'rgba(0, 0, 180, 0.8)';
      break;
    case 'red':
      this.sideMenuBgColor = 'rgba(180, 0, 0, 0.8)';
      break;
    case 'black':
      this.sideMenuBgColor = 'rgba(0, 0, 0, 0.8)';
      break;
      case 'yellow':
      this.sideMenuBgColor = 'rgba(180, 180, 0, 0.8)';
      break;
    case 'purple':
      this.sideMenuBgColor = 'rgba(75, 0, 130, 0.8)';
      break;
    case 'green':
      this.sideMenuBgColor = 'rgba(34, 139, 34, 0.8)';
      break;
    default:
      this.sideMenuBgColor = 'rgba(34, 139, 34, 0.8)';
    }

  }
}
