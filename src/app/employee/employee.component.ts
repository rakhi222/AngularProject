import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class Employee implements OnInit {
  
  private id: Number;
  private  name: string;
  private  salary: Number;
  private  department: string;
  
  constructor() {}

  ngOnInit() {
  }

}
