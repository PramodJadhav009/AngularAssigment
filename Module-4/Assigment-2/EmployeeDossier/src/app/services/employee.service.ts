import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../models/employee.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {

   }

   public getEmployee():IEmployee[]{
    return [
      {
        "employeeId": 2,
        "firstName":"John",
        "lastName": "Smith",
        "salary":10000,
        "dob":new Date('1983-11-02'),
        "email":"john@abc.com"
      },{
        "employeeId": 3,
        "firstName":"Josan",
        "lastName": "Smith",
        "salary":12000,
        "dob":new Date('1983-11-02'),
        "email":"josan@abc.com"
      },
      {
        "employeeId": 4,
        "firstName":"Amber",
        "lastName": "Dorothy",
        "salary":10000,
        "dob":new Date('1981-11-02'),
        "email":"amber@abc.com"
      },
      {
        "employeeId": 5,
        "firstName":"Mark",
        "lastName": "Frank",
        "salary":15000,
        "dob":new Date('1981-11-02'),
        "email":"mark@abc.com"
      }
    ];
   }
}
