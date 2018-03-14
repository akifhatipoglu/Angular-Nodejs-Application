import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthIntercepterService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req, next) {
    var authService = this.injector.get(AuthService);

    var authRequest = req.clone({
        headers : req.headers.set('Authorization','token '+ authService.token)
    });

    //const authRequest = req.clone({ headers: req.headers.set("Authorization", 'token '+ authService.token)});
    
    return next.handle(authRequest);
  }
}
