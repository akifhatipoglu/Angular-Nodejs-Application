import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class LoginGuardService implements CanActivate {
  constructor(private authService : AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    
    var logged = this.authService.isAuthenticated;
    if(logged){
        return true;
    }

    this.router.navigate(["login"],{queryParams:{returnUrl:state.url}});
    return false;
  }
}
