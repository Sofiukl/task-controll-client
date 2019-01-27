import { Component, OnInit } from '@angular/core';
import { FolderHttpService } from '../folder/service/folder-http.service';
import { Feed } from '../model/feed';
import { FeedService } from './service/feed.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private welcomeMsg: string;

  constructor(private feedHttpService: FeedService) { }
  feeds : Array<Feed>
  ngOnInit() {
    this.welcomeMsg = 'task-controll-client';
    this.fetchAllFeeds();
  }

  private addTask() {
    console.log('Your task will be added..')
  }

  public fetchAllFeeds() {
    this.feedHttpService.getFeedList()
        .subscribe(
            (response) => {
              this.feeds = response['result'];
              console.log(`Folder Fetch Result: ${JSON.stringify(response)}`);
            },
            (err) => {
              console.log(JSON.stringify(err));
            }
        ) 
  }

}
