import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EmployeeAddComponent} from './employees/add/employee-add.component';
import {EmployeeEditComponent} from './employees/edit/employee-edit.component';
import {EmployeesComponent} from './employees/employees.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {EmployeeService} from './employees/services/employee.service';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent, EmployeeAddComponent, EmployeeEditComponent, EmployeesComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
