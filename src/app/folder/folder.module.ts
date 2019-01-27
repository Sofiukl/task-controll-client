import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFolderComponent } from './add-folder/add-folder.component';
import { FormsModule } from '@angular/forms';
import { ViewFolderComponent } from './view-folder/view-folder.component';

@NgModule({
  declarations: [AddFolderComponent, ViewFolderComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FolderModule { }
