import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Route, Router, NavigationEnd } from '@angular/router';
import { CountService } from './common/count-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'task-controll-client';
  color: string;
  @ViewChild("copyright") copyRight : ElementRef;

  constructor(private router : Router, private countService: CountService) {}
  
  ngOnInit(): void {
    this.router.events.subscribe((ev) => {
      console.log(ev);
      if (ev instanceof NavigationEnd && ev['url'] == "/add-folder") {
        console.log(`You have visited this link: ${this.countService.getNextCount()} times`);
      }
    });
  }

  ngAfterViewInit(): void {
    this.copyRight.nativeElement.style.color = "green";
  }
}
