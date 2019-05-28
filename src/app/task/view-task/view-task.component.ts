import { Component, OnInit } from '@angular/core';
import { TaskHttpService } from '../service/task-http.service';
import { Task } from 'src/app/model/task';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedService } from 'src/app/dashboard/service/feed.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  feedId: string;
  tasks: Array<Task> = [];

  constructor(private taskHttpService: TaskHttpService,
    private route: ActivatedRoute,
    private feedHttpService: FeedService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.feedId = params['feedid'];
    });

    //TODO: refactore this using factory pattern
    if (this.feedId) {
      this.getTasksForAFeed();
    } else {
      this.getTasks();
    }
    
  }
  getTasks() {
    this.taskHttpService.getTasks()
        .subscribe(
            (response) => {
              if (response['error']) {
                console.log('Fail to fetch Tasks..');
              } else {
                console.log(`Task Result: ${JSON.stringify(response)}`);
                this.tasks = response['result'];
              }
            },
            (err) => {
              console.log(JSON.stringify(err));
            }
        ) 
  }

  getTasksForAFeed() {
    console.log(`Feed Id: ${this.feedId}`);
    this.feedHttpService.getFeedDetails(this.feedId)
        .subscribe(
            (response) => {
              if (response['error']) {
                console.log('Fail to fetch Tasks..');
              } else {
                console.log(`Feed Result: ${JSON.stringify(response)}`);
                this.tasks = response['result'][0].tasks;
              }
              
            },
            (err) => {
              console.log(JSON.stringify(err));
            }
        ) 
  }
}
