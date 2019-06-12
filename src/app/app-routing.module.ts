import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './components/topics/topics.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

const routes: Routes = [
  { path: 'temas', component: TopicsComponent },
  { path: 'informacion-angular', component: PersonalInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
