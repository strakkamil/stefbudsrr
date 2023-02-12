import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { config } from 'src/app/config';
import { ModalService } from 'src/app/services/modal.service';
import { RealizationsService } from 'src/app/services/realizations.service';

@Component({
	selector: 'app-porftolio-element',
	templateUrl: './porftolio-element.component.html',
	styleUrls: ['./porftolio-element.component.css']
})
export class PorftolioElementComponent {
	id?: number
	realizationsImg: {src: string}[] = []
	realizationsVideo: {src: string}[] = []
	realization: any

	constructor(private route: ActivatedRoute, private modalService: ModalService, private realizationService: RealizationsService) {
		this.id = this.route.snapshot.params['id'] - 1
		this.realizationsImg = config.realizations[this.id].photos
		this.realizationsVideo = config.realizations[this.id].videos
		this.modalService.setPhotos(this.realizationsImg)
		this.realization = this.realizationService.getRealizationById(this.id)
	}

	openModal(id: number) {
		this.modalService.openModal(id)
	}
}
