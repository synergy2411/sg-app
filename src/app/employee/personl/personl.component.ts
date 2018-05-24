import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personl',
  templateUrl: './personl.component.html',
  styleUrls: ['./personl.component.css']
})
export class PersonlComponent implements OnInit {
  id:  number;
  name : string;
  constructor(private route : ActivatedRoute) {
    // this.id = this.route.snapshot.params["id"];
    // this.name = this.route.snapshot.params["name"];
    console.log(this.route.snapshot);
    this.route.params.subscribe((param)=>{
      this.id = +param['id'];  
      this.name = param['name'];      
    })
   }

  ngOnInit() {
  }

}
