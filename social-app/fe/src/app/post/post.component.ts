import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  constructor(private userService: UserService) {}

  postMsg = "";

  ngOnInit() {}

  post() {
    this.userService.postMessage({ 'message': this.postMsg });
  }
}
