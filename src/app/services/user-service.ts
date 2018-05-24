import { Injectable } from "@angular/core";
import { USER_DATA } from "../data/mocks";
import { Http } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from "../model/user";
import * as firebase from 'firebase';

@Injectable()
export class UserService{
    counter : number = 0;
    token : string;

    constructor(private http : Http, 
                private httpClient : HttpClient){}

    getUserData(){
        //return USER_DATA;
        return this.http.get("assets/data/user-data.json")
            .map((response)=><User[]>response.json().userdata)
    }

    getApiData(){
        this.httpClient.get<User[]>("https://sg-app-9bb51.firebaseio.com/userdata.json",{
               // params : new HttpParams().set("auth", this.getToken()),
                                
                })
                .subscribe(data=>console.log(data));

        // const unsub = this.http.get("https://sg-app-9bb51.firebaseio.com/userdata.json")
        //     .map(response=>response)
        //     .subscribe((data)=>console.log(data),
        //         err=>console.log(err),
        //         ()=>console.log("API Data Received!!"));
            
    }

    register(email, password){
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response=>console.log(response))
            .catch(err=>console.log(err));
    }

    login(email, password){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response=>{
                firebase.auth().currentUser.getIdToken()
                    .then(token => {
                        console.log(token);
                        this.token = token})
                    .catch(err=>console.log(err));
                console.log(response)
            })
            .catch(err=>console.log(err));
    }

    getToken(){
        return this.token;
    }
}