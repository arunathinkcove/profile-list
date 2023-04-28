import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { EarningsComponent } from './earnings/earnings.component';

const routes: Routes = [
  {path:'',component:UserDropdownComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'settings',component:SettingsComponent},
  {path:'earnings',component:EarningsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
