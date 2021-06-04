import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './site/_components/footer/footer.component';
import { HeaderComponent } from './site/_components/header/header.component';
import { NavbarComponent } from './site/_components/navbar/navbar.component';
import { HomeComponent } from './site/_pages/home/home.component';
import { PoliticaprivacidadeComponent } from './site/_pages/politicaprivacidade/politicaprivacidade.component';

const routes: Routes = [
  {path: '',                    redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',                redirectTo: 'home', pathMatch: 'full'},
  {path: 'politicaprivacidade', redirectTo: 'politicaprivacidade', pathMatch: 'full'},
  // {path: 'header',              component: HeaderComponent},
  // {path: 'nav',                 component: NavbarComponent},
  // {path: 'footer',              component: FooterComponent},
  {path: 'home',                component: HomeComponent},
  {path: 'politicaprivacidade', component: PoliticaprivacidadeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
