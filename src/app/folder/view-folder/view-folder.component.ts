import { Component, OnInit } from '@angular/core';
import { FolderHttpService } from '../service/folder-http.service';
import { Folder } from 'src/app/model/folder';

@Component({
  selector: 'app-view-folder',
  templateUrl: './view-folder.component.html',
  styleUrls: ['./view-folder.component.css']
})
export class ViewFolderComponent implements OnInit {
  folders: Array<Folder> = [];

  constructor(private folderHttpService: FolderHttpService) { }

  ngOnInit() {

    this.folderHttpService.getFolders()
        .subscribe(
            (response) => {
              this.folders = response['result'];
              console.log(`Folder Fetch Result: ${JSON.stringify(response)}`);
            },
            (err) => {
              console.log(JSON.stringify(err));
            }
        ) 
  }

}
