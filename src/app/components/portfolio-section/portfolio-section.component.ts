import { Component, OnInit } from '@angular/core';
import { RealizationsService } from 'src/app/services/realizations.service';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit {
	realizations: {category: string, isPromoted: boolean, photos: {src: string}[], videos: {src: string}[]}[] = []

	constructor(private realizationService: RealizationsService) {}

	ngOnInit() {
		this.realizations = this.realizationService.getRealizations()
	}
}
