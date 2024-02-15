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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CS001Component } from './courses/cs001/cs001.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { IntroductionToCybersecurityComponent } from './courses/cs001/introduction-to-cybersecurity/introduction-to-cybersecurity.component';
import { TypesOfFraudsComponent } from './courses/cs001/types-of-frauds/types-of-frauds.component';
import { WaysToAvoidScamsComponent } from './courses/cs001/ways-to-avoid-scams/ways-to-avoid-scams.component';
import { Testioc01Component } from './courses/cs001/introduction-to-cybersecurity/testioc01/testioc01.component';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { InformationSecurityComponent } from './courses/cs001/information-security/information-security.component';
import { CiaTriadComponent } from './courses/cs001/cia-triad/cia-triad.component';
import { CyberThreatComponent } from './courses/cs001/cyber-threat/cyber-threat.component';
import { CyberVulnerabilityComponent } from './courses/cs001/cyber-vulnerability/cyber-vulnerability.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CoursesComponent,
    SigninComponent,
    SignupComponent,
    CS001Component,
    DashboardComponent,
    IntroductionToCybersecurityComponent,
    TypesOfFraudsComponent,
    WaysToAvoidScamsComponent,
    Testioc01Component,
    AllcoursesComponent,
    InformationSecurityComponent,
    CiaTriadComponent,
    CyberThreatComponent,
    CyberVulnerabilityComponent
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
      timeOut: 3000,
      // toastClass: 'toast toast-bootstrap-compatibility-fix'           
    }),
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
