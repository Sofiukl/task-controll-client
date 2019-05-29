import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './view-lazy/lazy.component';


const routes: Routes = [
  { path: 'view', component: LazyComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);