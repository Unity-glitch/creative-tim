import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AccordionModule } from 'primeng/accordion';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChipsModule } from 'primeng/chips';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SliderModule } from 'primeng/slider';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';











import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LogoComponent } from './logo/logo.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { SettingsComponent } from './settings/settings.component';
import { ButtonComponent } from './button/button.component';
import { ButtonDetailsComponent } from './button-details/button-details.component';
import { GridComponent } from './grid/grid.component';
import { PanelComponent } from './panel/panel.component';
import { GridDetailsComponent } from './grid-details/grid-details.component';
import { TypographyComponent } from './typography/typography.component';
import { TypographyDetailsComponent } from './typography-details/typography-details.component';
import { IconComponent } from './icon/icon.component';
import { IconDetailsComponent } from './icon-details/icon-details.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { SweetalertDetailsComponent } from './sweetalert-details/sweetalert-details.component';
import { PanelDetailsComponent } from './panel-details/panel-details.component';
import { WidgetDetailsComponent } from './widget-details/widget-details.component';
import { RegularFormsComponent } from './regular-forms/regular-forms.component';
import { RegularFormDetailsComponent } from './regular-form-details/regular-form-details.component';
import { ExtendedFormsComponent } from './extended-forms/extended-forms.component';
import { ExtendedFormsDetailsComponent } from './extended-forms-details/extended-forms-details.component';
import { ValidateComponent } from './validate/validate.component';
import { ValidateFormDetailsComponent } from './validate-form-details/validate-form-details.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleMapDetailsComponent } from './google-map-details/google-map-details.component';
import { FullScreenMapComponent } from './full-screen-map/full-screen-map.component';
import { FullScreenMapDetailsComponent } from './full-screen-map-details/full-screen-map-details.component';
import { VectorMapComponent } from './vector-map/vector-map.component';
import { VectorMapDetailsComponent } from './vector-map-details/vector-map-details.component';
import { RegularTableComponent } from './regular-table/regular-table.component';
import { RegularTableDetailsComponent } from './regular-table-details/regular-table-details.component';
import { ExtendedTableComponent } from './extended-table/extended-table.component';
import { ExtendedTableDetailsComponent } from './extended-table-details/extended-table-details.component';
import { WizardFormComponent } from './wizard-form/wizard-form.component';
import { WizardFormDetailsComponent } from './wizard-form-details/wizard-form-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    LogoComponent,
    ProfileComponent,
    DashboardDetailsComponent,
    SettingsComponent,
    ButtonComponent,
    GridComponent,
    PanelComponent,
    GridDetailsComponent,
    TypographyComponent,
    TypographyDetailsComponent,
    IconComponent,
    IconDetailsComponent,
    NotificationComponent,
    SweetalertComponent,
    SweetalertDetailsComponent,
    PanelDetailsComponent,
    WidgetDetailsComponent,
    RegularFormsComponent,
    RegularFormDetailsComponent,
    ExtendedFormsComponent,
    ExtendedFormsDetailsComponent,
    ValidateComponent,
    ValidateFormDetailsComponent,
    GoogleMapComponent,
    GoogleMapDetailsComponent,
    FullScreenMapComponent,
    FullScreenMapDetailsComponent,
    VectorMapComponent,
    VectorMapDetailsComponent,
    RegularTableComponent,
    RegularTableDetailsComponent,
    ExtendedTableComponent,
    ExtendedTableDetailsComponent,
    WizardFormComponent,
    WizardFormDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ToastModule,
    CalendarModule,
    ReactiveFormsModule,
    NotificationDetailsComponent,
    ConfirmDialogModule,
    AccordionModule,
    ButtonDetailsComponent,
    MultiSelectModule,
    ChipsModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    SliderModule,
    FileUploadModule,
    HttpClientModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
