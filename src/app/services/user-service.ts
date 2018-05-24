import { Injectable } from "@angular/core";
import { USER_DATA } from "../data/mocks";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "../model/user";
import * as firebase from 'firebase';

//import { Observable } from 'rxjs/Observable';



@Injectable()
export class UserService{
    counter : number = 0;
    constructor(private http : Http){}
    getUserData(){
        //return USER_DATA;
        return this.http.get("assets/data/user-data.json")
            .map((response)=><User[]>response.json().userdata)
    }

    getApiData(){
        this.http.get("https://sg-app-9bb51.firebaseio.com/userdata.json")
            .map(response=>response)
            .subscribe((data)=>console.log(data));
    }

    register(email, password){
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response=>console.log(response))
            .catch(err=>console.log(err));
    }

    login(email, password){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response=>console.log(response))
            .catch(err=>console.log(err));
    }

}


//.map(function(response)=>{
//    return <User[]>response.json().userdata;
//})

//npm install --save firebase