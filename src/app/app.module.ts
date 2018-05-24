import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipe/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './services/user-service';
import { ObservaleDemoComponent } from './observale-demo/observale-demo.component';
import { AuthInterceptor } from './services/auth-interceptor';
import { LoggerInterceptor } from './services/logger-interceptor';
import { APP_ROUTES } from './app.routing';
import { LoginGaurdService } from './services/login-gaurd-service';
import { EmployeeComponent } from './employee/employee.component';
import { PersonlComponent } from './employee/personl/personl.component';
import { ProfessionalComponent } from './employee/professional/professional.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HighlightDirective,
    UnlessDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    SigninComponent,
    SignupComponent,
    ObservaleDemoComponent,
    EmployeeComponent,
    PersonlComponent,
    ProfessionalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ UserService, LoginGaurdService, 
    {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  },{
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptor,
    multi : true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
