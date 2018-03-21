import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from './classes';
import { FeedbackService } from './feedback.service';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feedback Form';
  userScreen:boolean;
  
  logIn :boolean;
  admin: Admin;
  constructor(private feedbackService: FeedbackService) {

    this.admin= new Admin();
  }

  
  confirm(name, password) {
    this.admin.UserName = name;
    this.admin.Password = password;
    this.feedbackService.UserLogIn(this.admin).subscribe(res => this.logIn = res);
   
  }


}
