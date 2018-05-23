import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipe/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HighlightDirective,
    UnlessDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
