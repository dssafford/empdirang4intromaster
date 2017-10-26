import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EmployeeAddComponent} from './employees/add/employee-add.component';
import {EmployeeEditComponent} from './employees/edit/employee-edit.component';
import {EmployeesComponent} from './employees/employees.component';

@NgModule({
  declarations: [
    AppComponent, EmployeeAddComponent, EmployeeEditComponent, EmployeesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
