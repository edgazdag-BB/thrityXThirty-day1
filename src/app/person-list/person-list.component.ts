import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  @Output() person: EventEmitter<Person> = new EventEmitter<Person>();
  @Output() index: EventEmitter<number> = new EventEmitter<number>();
  @Input() personList!: Array<Person>;

  displayedColumns: string[] = ['id', 'name', 'age', 'hobbies', 'delete']
  
  constructor() {}

  ngOnInit(): void {}

  populateForm(person: Person) {
    this.person.emit(person);
  }

  deletePerson(index: number, person: Person) {
    this.index.emit(index);
  }
}
