import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-lazy',
  templateUrl: './edit-lazy.component.html',
  styleUrls: ['./edit-lazy.component.css']
})
export class EditLazyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('EditLazyComponent - ngOnInit');
  }

}
