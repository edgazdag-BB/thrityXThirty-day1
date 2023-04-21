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
    { id: 1, name: "Ed", age: 42, hobbies: "Ed's hobbies."},
    { id: 2, name: "Brandon", age: 30, hobbies: "Brandon's hobbies."},
    { id: 3, name: "Hudson", age: 30, hobbies: "Hudson's hobbies."},
    { id: 4, name: "Cole", age: 30, hobbies: "Cole's hobbies."}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  displayDescription(person: Person) {
    this.personDesc.emit(person);
  }
}
