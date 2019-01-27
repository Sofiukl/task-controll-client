import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feed } from 'src/app/model/feed';
import { serverurl, configurls } from 'src/app/common';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private httpClient: HttpClient) { }

  public getFeedList(): Observable<Array<Feed>> {
    return this.httpClient.get<Array<Feed>>(`${serverurl}${configurls.feedURL}`);
  }

  public getFeedDetails(id: string): Observable<Feed> {
    return this.httpClient.get<Feed>(`${serverurl}${configurls.feedURL}/${id}`);
  }
}
