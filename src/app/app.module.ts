import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './site/_components/header/header.component';
import { Nav_leftComponent } from './site/_components/nav_left/nav_left.component';
import { Nav_rightComponent } from './site/_components/nav_right/nav_right.component';
import { BtnapresentacaoComponent } from './site/_components/btnapresentacao/btnapresentacao.component';
import { FooterComponent } from './site/_components/footer/footer.component';
import { HomeComponent } from './site/_pages/home/home.component';
import { FaleconoscoComponent } from './site/_pages/faleconosco/faleconosco.component';
import { PoliticaprivacidadeComponent } from './site/_pages/politicaprivacidade/politicaprivacidade.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Nav_leftComponent,
    Nav_rightComponent,
    BtnapresentacaoComponent,
    PoliticaprivacidadeComponent,
    FaleconoscoComponent,
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
