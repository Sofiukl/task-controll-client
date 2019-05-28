import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements  OnInit, AfterViewInit, OnChanges, OnDestroy {
  
  feedCount: any;
  addCount: any;
  
  constructor() {}
  
  /**
   * This is the life cycle method which is called first
   * @override
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  /**
   * This life cycle method called next to the ngOnChanges
   */
  ngOnInit() {
    console.log("DashboardComponent: ngOnInit");
  }
  /**
   * This life cycle hook is called after component view 
   * and its child view is rendered
   */
  ngAfterViewInit(): void {
    console.log("DashboardComponent: ngAfterViewInit");
  }
  /**
   * This life cycle hook is called just before the destroying
   * the component
   */
  ngOnDestroy(): void {
    console.log("DashboardComponent: ngOnDestroy");
  }

  displayFeedSummarry($event) {
    this.feedCount = $event;
  }

  displayAddSummarry($event) {
    this.addCount = $event;
  }
 

}
