import { User } from "../model/user";

export const USER_DATA : User[] = [{
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 12, 1965"),
    isWorking : true,
    income : 50000,
    company : "Microsoft",
    image : 'assets/images/bill.jpg',
    vote : 120
},{
  firstName : "Steve",
  lastName : "Jobs",
  dob : new Date("Jan 12, 1965"),
  isWorking : false,
  income : 0,
  company : "Apple",
  image : 'assets/images/steve.png',
  vote : 180
},{
firstName : "Tim B.",
lastName : "Lee",
dob : new Date("Aug 2, 1965"),
isWorking : true,
income : 30000,
company : "World Wide Web",
image : 'assets/images/tim.jpg',
vote : 100
}]