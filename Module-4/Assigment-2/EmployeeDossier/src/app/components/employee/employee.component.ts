import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employee.module';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

   employees:IEmployee[];

    constructor(public empService:EmployeeService){
      this.employees = [];
    }

  ngOnInit(): void {
  this.employees = this.empService.getEmployee();
  }

  formatSalary(salary: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(salary);
  }
}
