import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { NavbarComponent } from './site/_components/navbar/navbar.component';
import { PoliticaprivacidadeComponent } from './site/_pages/politicaprivacidade/politicaprivacidade.component';
import { HeaderComponent } from './site/_components/header/header.component';
import { FooterComponent } from './site/_components/footer/footer.component';
import { HomeComponent } from './site/_pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
      
      PoliticaprivacidadeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
