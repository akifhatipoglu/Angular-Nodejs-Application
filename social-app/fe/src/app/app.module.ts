import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { PostComponent } from "./post/post.component";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { LoginGuardService } from "./login/login-guard.service";
import { AuthIntercepterService } from "./services/AuthIntercepter.service";
import { UserFilterPipe } from "./user/user-filter.pipe";
import { GlobalErrorHandlerService } from "./errors/globalErrorHandler.service";

const routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "users", component: UserComponent, canActivate: [LoginGuardService] },
  { path: "post", component: PostComponent },
  { path: "", component: PostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PostComponent,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    LoginGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercepterService,
      multi: true //aynı anda birden fazla interceptor çalışması için
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
