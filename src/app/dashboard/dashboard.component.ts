import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  person: Person = {id: 1, name: "Ed", description: "This is Ed's description"};

  constructor() { }

  ngOnInit(): void {
  }

  displayDescription(person: Person) {
    this.person = person;
  }
}
