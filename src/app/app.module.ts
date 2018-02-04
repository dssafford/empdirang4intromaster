import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EmployeeAddComponent} from './employees/add/employee-add.component';
import {EmployeeEditComponent} from './employees/edit/employee-edit.component';
import {EmployeesComponent} from './employees/employees.component';
import {FormsModule} from '@angular/forms';
import {EmployeeService} from './employees/services/employee.service';
import {AppRoutingModule} from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent, EmployeeAddComponent, EmployeeEditComponent, EmployeesComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
