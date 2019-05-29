import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskModule } from './task/task.module';
import { FolderModule } from './folder/folder.module';
import { CommonHttpService } from './common/common-http.service';
import { HighlightDirective } from './directives/highlight-me.directive';
import { ViewAdvertisementComponent } from './dashboard/advertisement/view-advertisement.component';
import { ViewFeedComponent } from './dashboard/view-feed/view-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HighlightDirective,
    ViewAdvertisementComponent,
    ViewFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule,
    FolderModule,
    HttpClientModule
  ],
  providers: [CommonHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
