import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/model/folder';
import { FolderHttpService } from '../service/folder-http.service';
import {CommonHttpService, Status} from '../../common';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.css']
})
export class AddFolderComponent implements OnInit {

  public folder: Folder;
  constructor(private folderHttpService: FolderHttpService) { }

  ngOnInit() {
    this.folder = new Folder();
  }

  public saveProject() {
    console.log(`Folder will be created: ${JSON.stringify(this.folder)}`);
    this.folderHttpService.createFeedWithFeed(this.folder)
        .subscribe(
          (result) => {
            console.log(`Folder response: ${JSON.stringify(result)}`);
            this.folder = new Folder();
          },
          (err) => {
            console.log(JSON.stringify(err));
          }
        )
  }
}
