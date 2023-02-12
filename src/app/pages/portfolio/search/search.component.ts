import { Component } from '@angular/core';
import { RealizationsService } from 'src/app/services/realizations.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
	realizations: any

	constructor (private realizationService: RealizationsService) {
		this.realizations = this.realizationService.getRealizations()
		console.log(this.realizations)
	}
}
