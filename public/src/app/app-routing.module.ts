import { BurbankComponent } from './burbank/burbank.component';
import { SanjoseComponent } from './sanjose/sanjose.component';

import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SeattleComponent } from './seattle/seattle.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'seattle',component: SeattleComponent },
  { path: 'washington',component: WashingtonComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'burbank', component: BurbankComponent },

  { path: 'chicago', component: ChicagoComponent },
  { path: 'dallas', component: DallasComponent },

  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/washington' },
  // the ** will catch anything that did not match any of the above routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
