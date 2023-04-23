import { Component, EnvironmentInjector, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  @Input() person!: Person;
  @Output() personUpdate: EventEmitter<Person> = new EventEmitter<Person>();
  @Output() personAdd: EventEmitter<Person> = new EventEmitter<Person>();
  constructor() { }

  ngOnInit(): void {
  }

  updatePerson(person: Person) {
    this.personUpdate.emit(person);
  }
  
  deletePerson(person: Person) {
    this.personUpdate.emit(person);
  }

  addPerson(person: Person) {
    this.personAdd.emit(person);
  }

}
