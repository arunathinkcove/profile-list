import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { EarningsComponent } from './earnings/earnings.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDropdownComponent,
    DashboardComponent,
    SettingsComponent,
    EarningsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
