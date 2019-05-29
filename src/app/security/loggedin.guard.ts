import { LoginService } from './login/login.servide';
import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate{

    constructor(private loginService: LoginService){}

    canLoad(route: Route): boolean {
      return this.checkAuthentication(route.path)
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean{
        return this.checkAuthentication(activatedRoute.routeConfig.path)
    }

    checkAuthentication(path: string): boolean {
        const loggedIn = this.loginService.isLoggedIn()

        if(!loggedIn){
            this.loginService.handleLogin(`/${path}`)
        }

        return loggedIn
    }
}