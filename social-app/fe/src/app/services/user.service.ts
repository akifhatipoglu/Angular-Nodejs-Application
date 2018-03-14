import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Subscriber } from "rxjs/Subscriber";
import 'rxjs/add/operator/catch'

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  path = environment.path;

  users = [];
  getUsers() {
    this.http.get<any>(this.path + "/users").subscribe(res => {
      this.users = res;
    });
  }

  postMessage(message){
    this.http.post(this.path+'/post',message).subscribe(res=>{
        
    });
  }
}
