import { Component, Input } from '@angular/core';
import { User } from '../model/user';

@Component({
    selector : 'app-user',
    templateUrl : './user.component.html'
})
export class UserComponent{
    @Input('xyz') title : string;
    @Input('user') user : User;
    moreInfo(user : User){
        alert(`${user.firstName} 
            is working with ${user.company}!!!`);
    }

   
}