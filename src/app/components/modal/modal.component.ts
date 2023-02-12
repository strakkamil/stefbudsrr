import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
	faTimes = faTimes
	faAngleLeft = faAngleLeft
	faAngleRight = faAngleRight
	src:string = ''

	constructor(private modalService: ModalService) {
		this.src = `/assets/images/${this.modalService.getPhoto()}`
	}

	closeModal() {
		this.modalService.closeModal()
	}

	previous() {
		this.src = `/assets/images/${this.modalService.previousPhoto()}`
	}

	next() {
		this.src = `/assets/images/${this.modalService.nextPhoto()}`
	}
}
