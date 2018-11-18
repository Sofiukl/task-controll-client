import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { ViewTaskComponent } from './task/view-task/view-task.component';

const routes: Routes = [
  
  { path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },
  
  { 
    path: 'dashboard', 
    component: DashboardComponent 
  },

  { 
    path: 'add-task', 
    component: AddTaskComponent 
  },

  { 
    path: 'view-task', 
    component: ViewTaskComponent 
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
