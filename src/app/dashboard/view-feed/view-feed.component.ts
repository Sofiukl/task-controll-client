import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FeedService } from '../service/feed.service';
import { Feed } from 'src/app/model/feed';

@Component({
  selector: 'app-view-feed',
  templateUrl: './view-feed.component.html',
  styleUrls: ['./view-feed.component.css']
})
export class ViewFeedComponent implements OnInit {
  
  @Output() feedChangeEvent = new EventEmitter<Number>();
  feeds: Array<Feed>;

  constructor(private feedHttpService : FeedService) { }

  ngOnInit() {
    console.log('ViewFeedComponent - ngOnInit');
    this.fetchAllFeeds();
  }

  public fetchAllFeeds() {
    this.feedHttpService.getFeedList()
        .subscribe(
            (response) => {
              this.feeds = response['result'];
              console.log(`Folder Fetch Result: ${JSON.stringify(response)}`);
              this.feedChangeEvent.emit(this.feeds.length);
            },
            (err) => {
              console.log(JSON.stringify(err));
            }
        ) 
  }

}
