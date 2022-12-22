import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn:'root'
})

export class AuthActivate implements CanActivate{

    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const loginRequired= route.data['loginGuard'];
        const logoutRequired= route.data['logoutGuard'];

        if(this.authService.isLoggedIn===logoutRequired){
            return this.router.createUrlTree(['/']);
            }

        if(loginRequired===undefined || this.authService.isLoggedIn===loginRequired){return true;}
     


 
            
        return this.router.createUrlTree(['/auth/login']);
    }

    
}