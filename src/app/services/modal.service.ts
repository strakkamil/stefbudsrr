import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ModalService {
	i: number = 0
	id: number = 0
	realizationsImg: { src: string }[] = []
	changeIsOpen: EventEmitter<boolean> = new EventEmitter<boolean>()

	openModal(id: number) {
		this.changeIsOpen.emit(true)
		this.id = id
	}

	closeModal() {
		this.changeIsOpen.emit(false)
	}

	setPhotos(realizationImg: { src: string }[]) {
		this.realizationsImg = realizationImg
	}

	getPhoto() {
		return this.realizationsImg[this.id].src
	}

	previousPhoto() {
		if (this.id === 0) {
			this.id = this.realizationsImg.length - 1
		} else {
			this.id--
		}
		return this.realizationsImg[this.id].src
	}

	nextPhoto() {
		if (this.id === this.realizationsImg.length - 1) {
			this.id = 0
		} else {
			this.id++
		}
		return this.realizationsImg[this.id].src
	}
}
