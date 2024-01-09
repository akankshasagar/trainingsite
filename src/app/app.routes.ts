import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/courses.component';
import { Topic1Component } from './courses/topic1/topic1.component';
import { Topic2Component } from './courses/topic2/topic2.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test/test1/test1.component';
import { Onlinetest1Component } from './courses/topic1/onlinetest1/onlinetest1.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'homepage' },
    { path: 'homepage', component: HomepageComponent },
    {
        path: 'courses', component: CoursesComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'courses' },
            { path: 'topic1', component: Topic1Component },
            { path: 'topic2', component: Topic2Component }
        ]
    },
    { path: 'test', component: TestComponent, children: [        
        { path: 'test1', component: Test1Component }
    ] },
    { path: 'courses/topic1/onlinetest1', component: Onlinetest1Component },
    { path: 'account', component: AccountComponent },
    // { path: 'account/login', component: LoginComponent },
    // { path: 'account/register', component: RegisterComponent },
    { path: 'courses-page', component: CoursesPageComponent }
];
