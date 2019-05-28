import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { Priority } from 'src/app/model/priority';
import { Folder } from 'src/app/model/folder';
import { TaskHttpService } from '../service/task-http.service';
import { FolderHttpService } from 'src/app/folder/service/folder-http.service';
import { CommonHttpService } from 'src/app/common/common-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  private task: Task;
  private priorities: Array<Priority> = [];
  private folders: Array<Folder> = [];
  
  constructor(private taskHttpService: TaskHttpService,
    private folderHttpService: FolderHttpService,
    private commonHttpService: CommonHttpService) { }

  ngOnInit() {
    console.log('Add task module loadded successfully..');
    this.task = new Task();

    //dropdown values
    this.setPrioityDropdown();
    this.setFolderDropdown();
  }

  saveTask() {
    console.log(JSON.stringify(this.task));

    this.taskHttpService.createTask(this.task)
        .subscribe(
          (data) => {
            console.log(JSON.stringify(data));
            this.task = new Task();
          },
          (err) => {
            console.log(JSON.stringify(err));
          }
        )
   
  }

  setFolderDropdown() {
    this.folderHttpService.getFolders()
        .subscribe(
          (response) => {
            const folderRes = response['result'];
            folderRes.forEach((folder) => {
              let folderObj = new Folder();
              folderObj.setID(folder['id']);
              folderObj.setName(folder['name']);    
              this.folders.push(folderObj);
            })
            console.log(`Folders: ${JSON.stringify(this.folders)}`);
          },
          (err) => {
            console.log(JSON.stringify(err));
          }
        )
  }

  setPrioityDropdown() {
    this.commonHttpService.getPriorities()
        .subscribe(
          (response) => {
            const priorityRes = response;
            priorityRes.forEach((priority) => {
              let priorityObj = new Priority(priority['id'], priority['name']);
              this.priorities.push(priorityObj);
            })
            console.log(`Priorities: ${JSON.stringify(this.priorities)}`);
          },
          (err) => {
            console.log(JSON.stringify(err));
          }
        )
  }
}
