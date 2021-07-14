import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { HomeComponent } from './site/_pages/home/home.component';
import { FaleconoscoComponent } from './site/_pages/faleconosco/faleconosco.component';
import { PoliticaprivacidadeComponent } from './site/_pages/politicaprivacidade/politicaprivacidade.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

const routes: Routes = [
  {path: '',                    redirectTo: 'home',                 pathMatch: 'full'},
  {path: 'home',                redirectTo: 'home',                 pathMatch: 'full'},
  {path: 'faleconosco',         redirectTo: 'faleconosco',          pathMatch: 'full'},
  {path: 'politicaprivacidade', redirectTo: 'politicaprivacidade',  pathMatch: 'full'},
  {path: 'home',                component: HomeComponent},
  {path: 'faleconosco',         component: FaleconoscoComponent},
  {path: 'politicaprivacidade', component: PoliticaprivacidadeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
