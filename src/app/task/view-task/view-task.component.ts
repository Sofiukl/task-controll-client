import { Component, OnInit } from '@angular/core';
import { TaskHttpService } from '../service/task-http.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  tasks: Array<Task> = [];

  constructor(private taskHttpService: TaskHttpService) { }

  ngOnInit() {
    this.taskHttpService.getTasks()
        .subscribe(
            (res) => {
              this.tasks = res;
              console.log(res);
            },
            (err) => {
              console.log(JSON.stringify(err));
            }
        ) 
  }

}
