import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'task-controll-client';
  color: string;
  @ViewChild("copyright") copyRight : ElementRef;

  ngAfterViewInit(): void {
    this.copyRight.nativeElement.style.color = "red";
  }
}
