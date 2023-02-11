import { Component } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
	faMapMarkerAlt = faMapMarkerAlt
	faEnvelope = faEnvelope
	faPhone = faPhone
}
