import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = '/api/employees';
  
  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  createEmployees(employee : Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }
}
