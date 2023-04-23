import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Person } from './person';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'thrityXThirty-day1';
  @Input() person!: Person;
  @Input() index!: number;
  @Input() addNew!: Person;
  
  personList: Array<Person> = new Array<Person>(
    new Person(1, "Ed", 42, "Ed's hobbies."),
    new Person(2, "Brandon", 30, "Brandon's hobbies."),
    new Person(3, "Hudson", 30, "Hudson's hobbies."),
    new Person(4, "Cole", 30, "Cole's hobbies.")
  );

  currentPerson: Person;

  constructor() { 
    this.currentPerson = this.personList[0];
  }

  ngOnInit(): void {}

  populateForm(person: Person) {
    this.currentPerson = person;
  }

  updatePerson(person: Person) {
    this.currentPerson.name = person.name;
    this.currentPerson.age = person.age;
    this.currentPerson.hobbies = person.hobbies;
  }

  deletePerson(index: number) {
    this.personList.splice(index, 1); 
    this.currentPerson = this.personList[0];
    this.personList = [...this.personList];
  }

  addNewPerson(person: Person) {
    let newPerson = new Person(this.personList.length+1, '', 0, '');
    this.personList.push(newPerson);
    this.personList = [...this.personList];
    this.currentPerson = this.personList[this.personList.length-1];
  }

}
