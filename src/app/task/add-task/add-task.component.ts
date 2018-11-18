import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { Priority } from 'src/app/model/priority';
import { Folder } from 'src/app/model/folder';
import { TaskHttpService } from '../service/task-http.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  private task: Task;
  private priorities: Array<Priority>;
  private folders: Array<Folder>;
  
  constructor(private taskHttpService: TaskHttpService) { }

  ngOnInit() {
    console.log('Add task module loadded successfully..');
    this.task = new Task();

    //dropdown values
    this.priorities = [];
    let priority1 = new Priority(1, "High");
    let priority2 = new Priority(2, "Medium");
    let priority3 = new Priority(3, "Low");

    this.priorities.push(priority1);
    this.priorities.push(priority2);
    this.priorities.push(priority3);

    this.folders = [];
    let folder1 = new Folder(1, "Default");
    let folder2 = new Folder(2, "Home");
    let folder3 = new Folder(3, "Office");

    this.folders.push(folder1);
    this.folders.push(folder2);
    this.folders.push(folder3);

  }

  saveTask() {
    console.log(JSON.stringify(this.task));

    this.taskHttpService.createTask(this.task)
        .subscribe(
          (data) => {
            console.log(JSON.stringify(data));
          },
          (err) => {
            console.log(JSON.stringify(err));
          }
        )
   
  }

}
