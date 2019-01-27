import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Priority } from '../model/priority';
import { serverurl, configurls } from './config';

@Injectable({ 
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(private httpClient: HttpClient ) { }

  public getPriorities(): Observable<Array<Priority>> {
    console.log('called priority Get End point..');
    return this.httpClient.get<Array<Priority>>(`${serverurl}${configurls.priorityURL}`);
  }
}
