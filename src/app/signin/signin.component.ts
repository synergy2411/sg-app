import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  login(form : NgForm){
    //alert("Form Submitted!");
    console.log(form.value.username, form.value.password);
    this.userService.login(form.value.username, form.value.password);
    form.resetForm();
  }
  constructor(private userService : UserService) { }

  getData(){
    this.userService.getApiData();
  }

  postData(){
    this.userService.postData();
  }
  ngOnInit() {
  }

}
