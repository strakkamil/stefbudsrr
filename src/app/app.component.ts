import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HamburgerService } from './services/hamburger.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stefbud';
  isModalOpen: boolean = false
  isHamburgerOpen: boolean = false
  subsctiptionModal?: Subscription
  subsctiptionHamburger?: Subscription

  constructor(private modalService: ModalService, private hamburgerService: HamburgerService) {}

  ngOnInit(): void {
	this.subsctiptionModal = this.modalService.changeIsOpen.subscribe((value) => {
		this.isModalOpen = value
	})
	this.subsctiptionHamburger = this.hamburgerService.changeIsOpen.subscribe((value) => {
		this.isHamburgerOpen = value
	})
  }

  ngOnDestroy() {
	this.subsctiptionModal?.unsubscribe()
  }
}
