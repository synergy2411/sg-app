import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  someCode = "template <script>alert('Hello')</script>Some More Contents...";
  someUrl = "javascript:alert('Hello')";
  safeUrl : any;
  constructor( private sanitize : DomSanitizer) {
    this.safeUrl = this.sanitize.bypassSecurityTrustUrl(this.someUrl);
   }

  ngOnInit() {
  }

}
