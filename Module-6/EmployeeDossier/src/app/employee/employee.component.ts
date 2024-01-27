import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy{
  employees:Employee[];
  private subscription: Subscription | undefined;
  
  constructor(public empService:EmployeeService){
        this.employees = [];
  }

  ngOnInit(): void {
   this.subscription = this.empService.getEmployees().subscribe((data:any) =>{
    this.employees = data;
   })
  }

  ngOnDestroy(): void {
   if(this.subscription){
      this.subscription.unsubscribe;
    }
  }
}
