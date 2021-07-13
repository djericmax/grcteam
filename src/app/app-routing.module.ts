import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaleconoscoComponent } from './site/_pages/faleconosco/faleconosco.component';
import { HomeComponent } from './site/_pages/home/home.component';
import { PoliticaprivacidadeComponent } from './site/_pages/politicaprivacidade/politicaprivacidade.component';

const routes: Routes = [
  {path: '',                    redirectTo: 'home',                 pathMatch: 'full'},
  {path: 'home',                redirectTo: 'home',                 pathMatch: 'full'},
  {path: 'politicaprivacidade', redirectTo: 'politicaprivacidade',  pathMatch: 'full'},
  {path: 'faleconosco',         redirectTo: 'faleconosco',          pathMatch: 'full'},
  {path: 'home',                component: HomeComponent},
  {path: 'politicaprivacidade', component: PoliticaprivacidadeComponent},
  {path: 'faleconosco',         component: FaleconoscoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
