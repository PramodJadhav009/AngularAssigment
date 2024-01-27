import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FormatSalaryPipe } from './common/format-salary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    FormatSalaryPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
