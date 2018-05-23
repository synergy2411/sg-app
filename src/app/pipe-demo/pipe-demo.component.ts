import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  filteredStatus = "";
  todos = [{
    label : "Some Work",
    status : 'done'
  },{
    label : "Some Work",
    status : 'pending'
  },{
    label : "Some Work",
    status : 'done'
  },{
    label : "Some Work",
    status : 'pending'
  }]

  addTodo(){
    this.todos.push({label : "New Work", status : 'pending'});
  }

  someData = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(100);
    }, 2000);
  })

  constructor() { }

  ngOnInit() {
  }

}
