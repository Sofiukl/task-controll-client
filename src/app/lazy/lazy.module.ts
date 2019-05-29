import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './view-lazy/lazy.component';
import { routing } from './lazy.routing';
import { EditLazyComponent } from './edit-lazy/edit-lazy.component';

@NgModule({
  declarations: [LazyComponent, EditLazyComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class LazyModule { }
