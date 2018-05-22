import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  parentValue : string;

  parentEvent(eventdata){
   // alert("Data from Child " + eventdata);
   this.parentValue = eventdata;
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
