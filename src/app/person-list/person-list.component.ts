import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  @Output() personDesc: EventEmitter<Person> = new EventEmitter<Person>();

  displayedColumns: string[] = ['id', 'name']
  person!: Person;
  personList: Person[] = [
    { id: 1, name: "Ed", description: "This is Ed's description."},
    { id: 2, name: "Brandon", description: "This is Brandon's description."},
    { id: 3, name: "Hudson", description: "This is Hudson's description."},
    { id: 4, name: "Cole", description: "This is Cole's description."}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  displayDescription(person: Person) {
    this.personDesc.emit(person);
  }
}
