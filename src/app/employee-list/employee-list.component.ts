import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee/employee.component';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.employeeService.getEmployees().subscribe(
      response => this.employees = response
    );
  }
}
