import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/modules/employee/employee.module';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  
   public employees:IEmployee[];
   
   constructor(){
    this.employees = [];
   }

   ngOnInit(): void {
    this.employees = [{
      "employeeId": 1,
      "firstName":"abc",
      "lastName": "Smith",
      "salary":5000,
      "dob":new Date('1983-11-02'),
      "email":"abc@abc.com"
    },{
      "employeeId": 2,
      "firstName":"John",
      "lastName": "Smith",
      "salary":10000,
      "dob":new Date('1983-11-02'),
      "email":"john@abc.com"
    },
    {
      "employeeId": 3,
      "firstName":"Alex",
      "lastName": "Smith",
      "salary":50000,
      "dob":new Date('1981-11-02'),
      "email":"alex@abc.com"
    }];
  }
}
