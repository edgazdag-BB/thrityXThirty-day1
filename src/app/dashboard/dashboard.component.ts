import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name']
  dashBoardData = [
    { id: 1, name: "Ed"},
    { id: 2, name: "Brandon"},
    { id: 3, name: "Hudson"},
    { id: 4, name: "Cole"}
  ] ;
  constructor() { }

  ngOnInit(): void {
  }

}
