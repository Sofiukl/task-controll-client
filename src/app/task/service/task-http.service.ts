import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { configurls, serverurl } from 'src/app/common/config';
import { Task } from 'src/app/model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskHttpService {

  constructor(private httpClient: HttpClient ) { }

  public getTasks(): Observable<Array<Task>> {
    //return this.httpClient.get<Array<Task>>(configurls.textfile);
    return this.httpClient.get<Array<Task>>(`${serverurl}${configurls.taskURL}`);
  }

  public createTask(task): Observable<Array<Task>> {
    return this.httpClient.post<Array<Task>>(`${serverurl}${configurls.taskURL}`, task)
  }
}
