import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ReportsComponent } from './reports/reports.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RepositoryComponent } from './repository/repository.component';
import { DialogComponent } from './repository/dialog/dialog.component';
import { MatCommonModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { dummy_data } from './models/repository_data';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RepositoryComponent,
    MonitoringComponent,
    ReportsComponent,
    NavbarComponent,
    HeaderComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [dummy_data,{
    provide: MatDialogRef,
    useValue: {}
  }, {
    provide: MAT_DIALOG_DATA,
    useValue: {}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
