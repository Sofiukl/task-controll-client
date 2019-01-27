import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Folder } from 'src/app/model/folder';
import { Observable } from 'rxjs';
import { configurls, serverurl } from 'src/app/common/config';
import { mergeMap } from 'rxjs/operators';
import { Status } from 'src/app/common';

@Injectable({
  providedIn: 'root'
})
export class FolderHttpService {

  constructor(private httpClient: HttpClient) { }

  public getFolders(): Observable<Array<Folder>> {
    return this.httpClient.get<Array<Folder>>(`${serverurl}${configurls.folderURL}`);
  }

  public createFolder(folder:Folder): Observable<Array<Folder>> {
    return this.httpClient.post<Array<Folder>>(`${serverurl}${configurls.folderURL}`, folder)
  }
  public createFeedWithFeed(folder) {
    let folderReq = this.httpClient.post(`${serverurl}${configurls.folderURL}`, folder);
    return folderReq.pipe(
      mergeMap(folder => this.httpClient.post(`${serverurl}${configurls.feedURL}`, {
        name: folder['name'],
        description: `A view for ${folder['name']}`,
        status:Status.Active,
        criteria: JSON.stringify({folderid:folder['id']})
      }))
    );
  }
}
