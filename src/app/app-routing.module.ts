import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/_pages/home/home.component';
import { PoliticaprivacidadeComponent } from './site/_pages/politicaprivacidade/politicaprivacidade.component';

const routes: Routes = [
  {path: '',                    redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',                redirectTo: 'home', pathMatch: 'full'},
  {path: 'politicaprivacidade', redirectTo: 'politicaprivacidade', pathMatch: 'full'},
  {path: 'home',                component: HomeComponent},
  {path: 'politicaprivacidade', component: PoliticaprivacidadeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
