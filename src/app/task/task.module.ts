import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { ViewTaskComponent } from './view-task/view-task.component';

@NgModule({
  declarations: [AddTaskComponent, ViewTaskComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TaskModule { }
