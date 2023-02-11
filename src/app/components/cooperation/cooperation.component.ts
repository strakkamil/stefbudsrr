import { Component } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cooperation',
  templateUrl: './cooperation.component.html',
  styleUrls: ['./cooperation.component.css']
})
export class CooperationComponent {
	faAngleUp = faAngleUp

	onTop() {
		window.scrollTo(0, 0)
	}
}
