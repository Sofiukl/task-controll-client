import { Injectable } from '@angular/core';
import { count } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  
  count : number = 0;

  constructor() { }

  public getNextCount(): number {
    return ++this.count;
  }
}
