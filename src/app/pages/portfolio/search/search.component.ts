import { Component, ViewChildren } from '@angular/core';
import { RealizationsService } from 'src/app/services/realizations.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
	realizations: any[]
	filteredRealizations: any[]
	category: string = 'ALL'
	@ViewChildren('category') buttons: any

	constructor (private realizationService: RealizationsService) {
		this.realizations = this.realizationService.getRealizations()
		this.filteredRealizations = this.realizations
	}

	setCategory(category: string) {
		this.category = category
		this.filteredRealizations = this.realizations.filter(element => element.category === category)
		if(category === 'Wszystkie') this.filteredRealizations = this.realizations
		this.removeClass()
		this.addClass() 
	}

	removeClass() {
		for(let element of this.buttons._results){
			element.nativeElement.classList.remove('active')
		}
 	}

	addClass() {
		for(let element of this.buttons._results){
			const category = element.nativeElement.getAttribute('data-category')
			if(category === this.category) element.nativeElement.classList.add('active')
		}
	}
}
