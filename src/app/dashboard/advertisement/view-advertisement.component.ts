import { Component, OnInit, OnDestroy, AfterViewInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-view-advertisement',
  templateUrl: './view-advertisement.component.html',
  styleUrls: ['./view-advertisement.component.css']
})
export class ViewAdvertisementComponent implements OnInit, OnDestroy, AfterViewInit {
  
  @Input() category: string;
  @Output() addChangeEvent: EventEmitter<Number> = new EventEmitter<Number>();

  constructor() { }
  
  ngOnInit() {
    console.log("ViewAdvertisementComponent - ngOnInit");
    console.log(`this.category - ${this.category}`);
    this.addChangeEvent.emit(1);
  }
  
  ngOnDestroy(): void {
    console.log("ViewAdvertisementComponent - ngOnDestroy");
  }
  
  ngAfterViewInit(): void {
    console.log("ViewAdvertisementComponent - ngAfterViewInit");
  }

}
