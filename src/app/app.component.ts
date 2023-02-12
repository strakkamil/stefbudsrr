import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stefbud';
  isModalOpen: boolean = false
  subsctiption?: Subscription

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
	this.subsctiption = this.modalService.changeIsOpen.subscribe((value) => {
		this.isModalOpen = value
	})
  }

  ngOnDestroy() {
	this.subsctiption?.unsubscribe()
  }
}
