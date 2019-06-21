import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee/employee.component';
import{ EmployeeListComponent} from '../employee-list/employee-list.component'

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee: Employee;
 
  constructor(private employeeService: EmployeeService, private listComponent: EmployeeListComponent) { }
  

  ngOnInit() {
  }

}
