import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PorftolioElementComponent } from './pages/porftolio-element/porftolio-element.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'realizacje', component: PortfolioComponent },
	{ path: 'realizacja/:id', component: PorftolioElementComponent },
	{ path: '**', pathMatch: 'full', component: HomeComponent }
];

const routerOptions: ExtraOptions = {
	initialNavigation: 'enabledBlocking',
	scrollPositionRestoration: 'enabled',
	anchorScrolling: 'enabled',
	scrollOffset: [0, 100]
}

@NgModule({
	imports: [RouterModule.forRoot(routes, routerOptions)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
