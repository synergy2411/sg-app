import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { UserService } from "./user-service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private userService : UserService){}

    intercept(req : HttpRequest<any>, next : HttpHandler ) : Observable<HttpEvent<any>>{
       console.log("Intercepted!!", req);
       
        const clonedReq = req.clone({
            params : new HttpParams()
                    .set("auth", this.userService.getToken())
            })
       return next.handle(clonedReq); 
    }
}