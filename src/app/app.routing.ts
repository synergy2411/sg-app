import {Routes } from '@angular/router';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ObservaleDemoComponent } from './observale-demo/observale-demo.component';

export const APP_ROUTES : Routes = [{
    path: "",
    redirectTo : 'pipe',
    pathMatch : 'full'
},{
    path : "pipe",
    component :  PipeDemoComponent
},{
    path : 'signup',
    component : SignupComponent
},{
    path :  'login',
    component : SigninComponent
},{
    path : "obsdemo",
    component : ObservaleDemoComponent
},{
    path : "**",
    redirectTo : "pipe",
    pathMatch : 'full'
}]