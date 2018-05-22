import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
    selector : 'app-user',
    templateUrl : './user.component.html'
})
export class UserComponent{

    moreInfo(user : User){
        alert(`${user.firstName} 
            is working with ${user.company}!!!`);
    }

    user : User = {
        firstName : "Bill",
        lastName : "Gates",
        dob : new Date("Dec 12, 1965"),
        isWorking : true,
        income : 50000,
        company : "Microsoft",
        image : 'assets/images/bill.jpg',
        vote : 120
    }
}