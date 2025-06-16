import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { ButtonDetailsComponent } from './button-details/button-details.component';
import { GridDetailsComponent } from './grid-details/grid-details.component';
import { TypographyDetailsComponent } from './typography-details/typography-details.component';
import { IconDetailsComponent } from './icon-details/icon-details.component';
import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { SweetalertDetailsComponent } from './sweetalert-details/sweetalert-details.component';
import { PanelDetailsComponent } from './panel-details/panel-details.component';
import { WidgetDetailsComponent } from './widget-details/widget-details.component';
import { RegularFormDetailsComponent } from './regular-form-details/regular-form-details.component';
import { ExtendedFormsDetailsComponent } from './extended-forms-details/extended-forms-details.component';
import { ValidateFormDetailsComponent } from './validate-form-details/validate-form-details.component';
import { GoogleMapDetailsComponent } from './google-map-details/google-map-details.component';
import { FullScreenMapDetailsComponent } from './full-screen-map-details/full-screen-map-details.component';
import { VectorMapDetailsComponent } from './vector-map-details/vector-map-details.component';
import { RegularTableDetailsComponent } from './regular-table-details/regular-table-details.component';
import { ExtendedTableDetailsComponent } from './extended-table-details/extended-table-details.component';
import { WizardFormDetailsComponent } from './wizard-form-details/wizard-form-details.component';

const routes: Routes = [
  {path: '', component:DashboardDetailsComponent},
  {path: 'dashboard-details', component:DashboardDetailsComponent},
  {path: 'components/button', component: ButtonDetailsComponent},
  {path: 'components/grid', component: GridDetailsComponent},
  {path: 'components/icon', component: IconDetailsComponent},
  {path: 'components/notification', component: NotificationDetailsComponent},
  {path: 'components/typography', component: TypographyDetailsComponent},
  {path: 'components/sweet-alert', component: SweetalertDetailsComponent},
  {path: 'components/panel', component: PanelDetailsComponent},
  {path: 'widgets', component: WidgetDetailsComponent},
  {path: 'forms/regular', component: RegularFormDetailsComponent},
  {path: 'forms/extended', component: ExtendedFormsDetailsComponent},
  {path: 'forms/validation', component: ValidateFormDetailsComponent},
  {path: 'forms/wizard', component: WizardFormDetailsComponent},
  {path: 'maps/google', component: GoogleMapDetailsComponent},
  {path: 'maps/fullscreen', component: FullScreenMapDetailsComponent},
  {path: 'maps/vector', component: VectorMapDetailsComponent},
  {path: 'tables/regular', component: RegularTableDetailsComponent},
  {path: 'tables/extended', component: ExtendedTableDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
