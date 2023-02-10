import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paes/home/home.component';
import { PortfolioComponent } from './paes/portfolio/portfolio.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'realizacje', component: PortfolioComponent}
];

const routerOptions: ExtraOptions = {
	scrollPositionRestoration: 'enabled',
	anchorScrolling: 'enabled',
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
