import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportsComponent } from './reports/reports.component';
import { DialogComponent } from './repository/dialog/dialog.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
    {
        path: 'navbar', component: NavbarComponent
    },
    {
        path: 'header', component: HeaderComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'repository', component: RepositoryComponent
    },
    {
        path: 'dialog', component: DialogComponent
    },
    {
        path: 'monitoring', component: MonitoringComponent
    },
    {
        path: 'reports', component: ReportsComponent
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}