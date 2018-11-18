import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private welcomeMsg: string;

  constructor() { }

  ngOnInit() {
    this.welcomeMsg = 'task-controll-client';
  }

  private addTask() {
    console.log('Your task will be added..')
  }

}
