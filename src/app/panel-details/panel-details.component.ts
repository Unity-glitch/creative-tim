import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-panel-details',
  templateUrl: './panel-details.component.html',
  styleUrls: ['./panel-details.component.css'],
})
export class PanelDetailsComponent {
  notification = false;
  isOpen = false;
  activeTabId = 'profile';
  activeTabIdTwo = 'Profile';
  activeTabIdThree = 'show-profile';
  activeTabIdFour = 'description';

  accordionItems = [
    {
      title: 'Collapsible Group Item #1',
      content:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      isOpen: false,
    },
    {
      title: 'Collapsible Group Item #2',
      content:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      isOpen: false,
    },
    {
      title: 'Collapsible Group Item #3',
      content:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      isOpen: false,
    },
  ];

  constructor(private service: ServiceService) {
    this.service.sidebarOpen$.subscribe((open) => {
      this.isOpen = open;
    });
  }

  showAccordion(item: any) {
    item.isOpen = !item.isOpen;
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
  viewTab(tabId: any) {
    this.activeTabId = tabId;
  }
  viewTabTwo(tabIdTwo: any) {
    this.activeTabIdTwo = tabIdTwo;
  }
  viewTabThree(tabIdThree: any) {
    this.activeTabIdThree = tabIdThree;
  }
  viewTabFour(tabIdFour: any) {
    this.activeTabIdFour = tabIdFour;
  }
}
