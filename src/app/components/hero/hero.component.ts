import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
	faAngleDown = faAngleDown

	constructor(private router: Router) {}

	toAbout() {
		this.router.navigate([], { fragment: "about" });
	}
}
