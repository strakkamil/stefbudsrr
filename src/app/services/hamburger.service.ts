import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HamburgerService {
	changeIsOpen: EventEmitter<boolean> = new EventEmitter<boolean>()

	openHamburger() {
		this.changeIsOpen.emit(true)
	}

	closeHamburger() {
		this.changeIsOpen.emit(false)
	}
}
