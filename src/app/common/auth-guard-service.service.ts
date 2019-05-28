import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
/**
 * This is authentication guard service
 */
export class AuthGuardServiceService implements CanActivate {
  constructor() { }
  
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, 
  state: import("@angular/router").RouterStateSnapshot): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
     return true;
  }
}
