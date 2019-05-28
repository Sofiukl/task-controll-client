import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { AddFolderComponent } from './folder/add-folder/add-folder.component';
import { ViewFolderComponent } from './folder/view-folder/view-folder.component';
import { AuthGuardServiceService } from './common/auth-guard-service.service';

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
    component: AddTaskComponent,
    canActivate: [AuthGuardServiceService]
  },
  
  { 
    path: 'view-task/:feedid', 
    component: ViewTaskComponent 
  },

  { 
    path: 'view-task', 
    component: ViewTaskComponent 
  },
  
  { 
    path: 'add-folder', 
    component: AddFolderComponent 
  },

  { 
    path: 'view-folder', 
    component: ViewFolderComponent 
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
