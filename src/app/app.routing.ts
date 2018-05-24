import {Routes } from '@angular/router';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ObservaleDemoComponent } from './observale-demo/observale-demo.component';
import { LoginGaurdService } from './services/login-gaurd-service';
import { ProductComponent } from './product/product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecComponent } from './product/spec/spec.component';
import { EmployeeComponent } from './employee/employee.component';
import { PersonlComponent } from './employee/personl/personl.component';
import { ProfessionalComponent } from './employee/professional/professional.component';

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
    component : ObservaleDemoComponent,
    canActivate : [LoginGaurdService]
},{
    path : 'product',
    loadChildren : "app/product/product.module#ProductModule"
},{
    path : 'employee',
    component : EmployeeComponent,
    children : [{
        path : "personal/:id/:name",
        component : PersonlComponent
    },{
        path : "professional",
        component : ProfessionalComponent
    }]
},{
    path : "**",
    redirectTo : "pipe",
    pathMatch : 'full'
}]