import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Employees } from '../interfaces/employees.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(environment.apiURL + 'employees');
  }

  createEmployee(empleado: Employees): Observable<any> {
    return this.http.post(environment.apiURL + 'create', empleado);
  }
}
