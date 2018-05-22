import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';


@Component({
    selector : 'app-user',
    templateUrl : './user.component.html'
})
export class UserComponent{
    @Input('xyz') title : string;
    @Input('user') user : User;

    @Output('childEvent') childEvent = new EventEmitter<string>();

    onKeyUp(value : string){
        this.childEvent.emit(value);
        console.log(value);
    }
    moreInfo(user : User){
        alert(`${user.firstName} 
            is working with ${user.company}!!!`);
    }

   
}