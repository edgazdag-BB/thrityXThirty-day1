import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  @Input() person!: Person;
  
  personForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    hobbies: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
