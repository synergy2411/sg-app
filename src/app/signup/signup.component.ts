import { Component, OnInit } from '@angular/core';
import { FormControl, 
  FormGroup, 
  FormBuilder, 
  Validators } from '@angular/forms';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers : [ UserService ]
})
export class SignupComponent implements OnInit {

  username = new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ]);
  password = new FormControl('', [
    Validators.required,
    this.hasExclamation
  ]);

  hasExclamation(input : FormControl){
    const exclamation = input.value.indexOf('!') >=0;
    return exclamation ? null : {needExclamation : true}
  }

  registerForm : FormGroup;
  constructor(private fb : FormBuilder, 
          public userService : UserService) { 
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }
  decrease(){
    this.userService.counter--;
  }
  register(){
    console.log(this.registerForm);
  }

  ngOnInit() {
  }

}
