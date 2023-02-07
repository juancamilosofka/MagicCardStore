import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {


constructor(private angularAuth:AngularFireAuth, private router: Router){}


  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Promise<boolean | UrlTree>  {
    const user = await this.angularAuth.currentUser;
    const islogedin = user ? true: false;
    if(!islogedin){
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
      alert('You have to log in to accesss this page')
    }
    return islogedin;


  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
