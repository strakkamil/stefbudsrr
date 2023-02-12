import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HamburgerService } from 'src/app/services/hamburger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	faBars = faBars

	constructor(private hamburgerService: HamburgerService) {}

	openHamburger() {
		this.hamburgerService.openHamburger()
	}
}
