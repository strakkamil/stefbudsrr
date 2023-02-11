import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-porftolio-element',
  templateUrl: './porftolio-element.component.html',
  styleUrls: ['./porftolio-element.component.css']
})
export class PorftolioElementComponent implements OnInit {

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		console.log(this.route.snapshot.params['id'])
	}
}
