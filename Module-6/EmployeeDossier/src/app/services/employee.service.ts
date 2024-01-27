import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public httpClientService:HttpClient) { }

  public getEmployees():Observable<any>{
    return this.httpClientService.get('https://dummy.restapiexample.com/api/v1/employees')
  }
}
