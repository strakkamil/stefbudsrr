import { Component, INJECTOR, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
	faAngleDown = faAngleDown
	@Input() title?: string
	@Input() desc?: string
	@Input() section?: string
	@Input() path?: string

	constructor(private router: Router) {}

	toSection() {
		this.router.navigate([], { fragment: this.section });
	}
}
