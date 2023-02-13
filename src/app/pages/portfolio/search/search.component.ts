import { Component, ViewChildren } from '@angular/core';
import { RealizationsService } from 'src/app/services/realizations.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent {
	realizations: any[]
	category: string = 'ALL'
	@ViewChildren('category') buttons: any
	@ViewChildren('element') elements: any

	constructor(private realizationService: RealizationsService) {
		this.realizations = this.realizationService.getRealizations()
	}

	setCategory(category: string) {
		this.category = category
		this.filterCategories()
		this.removeClass()
		this.addClass()
	}

	filterCategories() {
		for (let element of this.elements._results) {
			const elementCategory = element.nativeElement.getAttribute('data-category')
			if ((this.category === elementCategory) || this.category === 'Wszystkie') {
				element.nativeElement.classList.remove('hidden')
			} else {
				element.nativeElement.classList.add('hidden')
			}
		}
	}

	removeClass() {
		for (let element of this.buttons._results) {
			element.nativeElement.classList.remove('active')
		}
	}

	addClass() {
		for (let element of this.buttons._results) {
			const category = element.nativeElement.getAttribute('data-category')
			if (category === this.category) element.nativeElement.classList.add('active')
		}
	}
}
