import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee2 } from '../models/employee2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public httpClientService:HttpClient) { 

  }

  public getEmployees():Observable<any>{
    return this.httpClientService.get('http://localhost:3000/employees')
  }
}
