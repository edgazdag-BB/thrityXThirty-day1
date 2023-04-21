import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  person: Person = {id: 1, name: "Ed", age: 42, hobbies: "Ed's hobbies."};

  constructor() { }

  ngOnInit(): void {
  }

  displayDescription(person: Person) {
    this.person = person;
  }
}
