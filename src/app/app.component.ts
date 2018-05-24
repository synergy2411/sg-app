import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { UserService } from  './services/user-service';
import * as firebase from 'firebase';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoggerInterceptor } from './services/logger-interceptor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'app';
  parentValue : string;

  constructor(public userService : UserService){}
  signout(){
    this.userService.signOut();
  }
  parentEvent(eventdata){
   // alert("Data from Child " + eventdata);
   this.parentValue = eventdata;
  }

  users : User[]; 
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAf_O4-g444bfGKAW7epcUaqIHhoW5a_Uo",
      authDomain: "sg-app-9bb51.firebaseapp.com"
    });
    //this.users = this.userService.getUserData();
    this.userService.getUserData()
      .subscribe((users)=>this.users = users);
   
      
  }

  increase(){
    this.userService.counter++;
  }
}
