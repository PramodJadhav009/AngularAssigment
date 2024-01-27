import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee2 } from '../models/employee2';
import { EmployeeService } from '../services/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit, OnDestroy{
  public employees:Employee2[];
  private subscription: Subscription | undefined;
  
  constructor(public employeeService:EmployeeService){
   this.employees = [];
  }
  ngOnDestroy(): void {
    if(this.subscription) {
       this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.employeeService.getEmployees().subscribe((data:any) =>{
      this.employees = data;
    })
  }
}
