import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { ContactComponent } from './components/contact/contact.component';
import { CooperationComponent } from './components/cooperation/cooperation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './pages/portfolio/search/search.component';
import { PorftolioElementComponent } from './pages/porftolio-element/porftolio-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    PortfolioComponent,
    HomeComponent,
    PortfolioSectionComponent,
    ContactComponent,
    CooperationComponent,
    FooterComponent,
    SearchComponent,
	PorftolioElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
