import { Component, Input, Output, EventEmitter,
        OnInit, OnChanges, AfterContentInit, AfterContentChecked,
         AfterViewInit, AfterViewChecked, DoCheck, OnDestroy, 
         SimpleChanges} from '@angular/core';
import { User } from '../model/user';


@Component({
    selector : 'app-user',
    templateUrl : './user.component.html'
})
export class UserComponent implements OnInit, OnChanges, AfterContentInit,
            AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck,
            OnDestroy{
    @Input('xyz') title : string;
    @Input('users') users : User[];

    myNum : number = 2;

    @Output('childEvent') childEvent = new EventEmitter<string>();

    onKeyUp(value : string){
        this.childEvent.emit(value);
        console.log(value);
    }
    moreInfo(user : User){
        alert(`${user.firstName} 
            is working with ${user.company}!!!`);
    }
    constructor(){console.log("Constructor Called!");}
    ngOnChanges(changes : SimpleChanges){
        console.log("ngOnChanges called!");
        console.log(changes);
    }
    ngOnInit(){console.log("ngOnInit called!"); }
    ngDoCheck(){console.log("ngDoCheck called!");}
    ngAfterContentInit(){console.log("ngAfterContentInit called!");}
    ngAfterContentChecked(){console.log("ngAfterContentChecked called!");}
    ngAfterViewInit(){console.log("ngAfterViewInit called!");}
    ngAfterViewChecked(){console.log("ngAfterViewChecked called!");}
    ngOnDestroy(){console.log("ngOnDestroy called!");}
   
}