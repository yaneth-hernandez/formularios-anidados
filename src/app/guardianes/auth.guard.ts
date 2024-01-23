import { CanActivateFn, Route, CanActivate } from '@angular/router';
import { Injectable, inject } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, } from "@angular/router";
import { Observable, pipe, map } from "rxjs";
import { AuthService } from "../servicios/auth.service";

@Injectable({
  providedIn:'root'
})

// export class AuthGuard implements CanActivateFn {
  
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//     throw new Error('Method not implemented.');
//   }


//}
class PermissionService{
  constructor(
    private route:Router,
    private authService:AuthService
  ){}

  // canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |UrlTree{
  //    if(this.authService.isAuthenticated()){
  //     return true
  //    }else{
  //     return this.route.createUrlTree(['/inicio'])
  //    }
  // }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
  //   return this.authService.isAuthenticated().pipe(
  //     map(authenticated => authenticated ? true : this.route.createUrlTree(['/login']))
  //   );
  // }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
  //   return this.authService.isAuthenticated().then(authenticated => authenticated ? true : this.route.createUrlTree(['/login']));
  // }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   return this.authService.isAuthenticated();
  // }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UrlTree {
    return this.route.createUrlTree(['/login']);
  }
}
export const AuthGuard:CanActivateFn=(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |UrlTree=>{
  return inject(PermissionService).canActivate(next, state);
}