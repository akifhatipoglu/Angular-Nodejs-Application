import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable()
export class AuthService {

    constructor(private http:HttpClient,private route: Router) { }

    path="http://localhost:3000/auth";
    TOKEN_KEY = "TOKEN";

    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    registerUser(registerData){
        this.http.post<any>(this.path+"/register",registerData).subscribe(res=>{
            this.saveToken(res.token);
            this.route.navigate(['users']);
        });
    }

    loginUser(userData){
        this.http.post<any>(this.path+"/login",userData).subscribe(res=>{
            this.saveToken(res.token);
            this.route.navigate(['users']);
        });
    }

    logOut(){
        localStorage.removeItem(this.TOKEN_KEY);
        this.route.navigate(['login']);
    }

    saveToken(token){
        localStorage.setItem(this.TOKEN_KEY,token);
    }

    get token(){
        return localStorage.getItem(this.TOKEN_KEY);
    }
}