import { Component, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { HamburgerService } from 'src/app/services/hamburger.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent {
	faTimes = faTimes
	@Input() isOpen?: boolean

	constructor(private hamburgerServide: HamburgerService) {}

	closeHamburger() {
		this.hamburgerServide.closeHamburger()
	}
}
