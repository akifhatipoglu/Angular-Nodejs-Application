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
  errorMessage = "";
  ngOnInit() {}

  post() {
    try {
      this.userService.postMessage({ message: this.postMsg });
    } catch (error) {
      this.errorMessage = "Bir hata oluştu!";
    }
  }
}
