import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/courses.component';
import { SigninComponent } from './homepage/signin/signin.component';
import { SignupComponent } from './homepage/signup/signup.component';
import { CS001Component } from './courses/cs001/cs001.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { IntroductionToCybersecurityComponent } from './courses/cs001/introduction-to-cybersecurity/introduction-to-cybersecurity.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage'},
  { path: 'homepage', component: HomepageComponent },
  { path: 'homepage/signin', component: SigninComponent },
  { path: 'homepage/signup', component: SignupComponent },
  { path: 'courses', component: CoursesComponent},
  { path: 'courses/cs001', component: CS001Component, canActivate:[AuthGuard], children: [
    { path: '', pathMatch: 'full', redirectTo: 'introduction-to-cybersecurity' },
    { path: 'introduction-to-cybersecurity', component: IntroductionToCybersecurityComponent }
  ] },  
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }