import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { UserService } from "./user-service";
import 'rxjs/add/operator/do';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor{
    constructor(private userService : UserService){}

    intercept(req : HttpRequest<any>, next : HttpHandler ) : Observable<HttpEvent<any>>{
       console.log("Logger Intercepted!!", req);
       
       return next.handle(req)
            .do(response=>{
                console.log(response);
                return response;
            }); 
    }
}