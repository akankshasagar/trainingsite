import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/courses.component';
import { SigninComponent } from './homepage/signin/signin.component';
import { SignupComponent } from './homepage/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CS001Component } from './courses/cs001/cs001.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CoursesComponent,
    SigninComponent,
    SignupComponent,
    CS001Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    RouterModule,
    HttpClientModule,
    NgToastModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      // toastClass: 'toast toast-bootstrap-compatibility-fix'           
    }),
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
