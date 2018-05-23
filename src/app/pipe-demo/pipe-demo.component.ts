import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  someData = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(100);
    }, 2000);
  })
  
  constructor() { }

  ngOnInit() {
  }

}
