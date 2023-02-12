import { Injectable } from '@angular/core';
import { config } from '../config';

@Injectable({
	providedIn: 'root'
})
export class RealizationsService {
	realizations = config.realizations

	getRealizations() {
		return this.realizations
	}

	getRealizationById(id: number) {
		return this.realizations[id]
	}
}
