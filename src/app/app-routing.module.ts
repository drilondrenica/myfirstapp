import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AnimationComponent } from './animation/animation.component';
import { Animation2Component } from './animation2/animation2.component';
import { ButtonComponent } from './button/button.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'animation2', component: Animation2Component },
  { path: 'button', component: ButtonComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
