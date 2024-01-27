import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/modules/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employeeRecords: IEmployee[];
  public showEdit:boolean;
  public selectedEmployee: IEmployee | null = null;

  constructor() {
    this.employeeRecords = [];
    this.showEdit = true;
    this.selectedEmployee = null;
  }

  public ngOnInit(): void {
     this.employeeRecords = [{
    "employeeId": 2,
    "firstName":"John",
    "lastName": "Smith",
    "salary":10000,
    "dob":new Date('1983-11-02'),
    "email":"john@abc.com"
     }];

     this.selectedEmployee = this.employeeRecords[0];
  }


  editEmp(index: number): void {
    this.selectedEmployee = { ...this.employeeRecords[index] };
    this.showEdit = false;
  }

  public updateEmp() {
    const employeeId = this.selectedEmployee?.employeeId ?? null;
    // Using optional chaining to check if selectedEmployee and its employeeId are not null or undefined
    if (this.selectedEmployee?.employeeId != null) {
      const index = this.employeeRecords.findIndex(e => e.employeeId === employeeId);
      if (index !== -1) {
        // Update the employee record only if the selectedEmployee is not null
        this.employeeRecords[index] = { ...this.selectedEmployee };
      }
      // Reset the state after the update
      this.showEdit = true;
      this.selectedEmployee = null;
    }
  
  }

}

