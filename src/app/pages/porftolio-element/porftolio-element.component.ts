import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { config } from 'src/app/config';
import { ModalService } from 'src/app/services/modal.service';

@Component({
	selector: 'app-porftolio-element',
	templateUrl: './porftolio-element.component.html',
	styleUrls: ['./porftolio-element.component.css']
})
export class PorftolioElementComponent {
	realizationsImg: {src: string}[] = []

	constructor(private route: ActivatedRoute, private modalService: ModalService) {
		this.realizationsImg = config.realizations[this.route.snapshot.params['id'] - 1].photos
		this.modalService.setPhotos(this.realizationsImg)
	}

	openModal(id: number) {
		this.modalService.openModal(id)
	}
}
