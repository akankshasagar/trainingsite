import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/courses.component';
import { Topic1Component } from './courses/topic1/topic1.component';
import { Topic2Component } from './courses/topic2/topic2.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'homepage' },
    { path: 'homepage', component: HomepageComponent },
    {        
        path: 'courses', component: CoursesComponent, children: [            
            { path: 'topic1', component: Topic1Component },
            { path: 'topic2', component: Topic2Component}
        ]
    },
];
