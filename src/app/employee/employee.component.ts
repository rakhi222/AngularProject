import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class Employee implements OnInit {
  
  private id: number;
  private  name: string;
  private  salary: string;
  private  department: string;
  
  constructor() {}

  ngOnInit() {
  }

}
