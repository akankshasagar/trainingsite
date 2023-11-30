import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AiComponent } from './topic/ai/ai.component';
import { LoaderComponent } from './loader/loader.component';
import { Topic2Component } from './topic/topic2/topic2.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'homepage'},
  {path: 'loader', component: LoaderComponent},
  {path: 'homepage', component: HomepageComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'homepage'},
    {path: 'ai', component: AiComponent},
    {path: 'topic2', component: Topic2Component}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
