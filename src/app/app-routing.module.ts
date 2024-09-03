import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ResultatComponent } from './resultat/resultat.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "quizz",
    component: QuizzComponent
  },
  {
    path: "resultat",
    component: ResultatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
