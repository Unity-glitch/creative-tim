import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('expand', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('200ms ease-in-out')),
    ]),
  ],
})
export class ProfileComponent {
  menus = [
    {
      expanded: false,
      submenus: [
        { firstName: 'My',secondName: 'Profile' },
        { firstName: 'Edit',secondName: 'Profile' },
        { firstName: 'Settings' },
      ],
    },
  ];

  constructor() {}
  dropDown(menu: any) {
    menu.expanded = !menu.expanded;
  }
}
