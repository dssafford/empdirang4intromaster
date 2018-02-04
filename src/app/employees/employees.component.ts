import {Component, OnInit} from '@angular/core';
import {Employee} from './models/employee';
import {EmployeeService} from './services/employee.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  title = 'Employee Directory';
  employees: Employee[];

  constructor(private _employeeService: EmployeeService,
              private _router: Router) {
  }

  getEmployees() {

    // this.http.get('http://localhost:8003/api/EmployeeList').subscribe(data => {
    //   console.log(data);

      this._employeeService.getEmployees()
        .subscribe(employees => this.employees = employees);

  }

  ngOnInit() {
    // this.http.get('http://localhost:8003/api/EmployeeList').subscribe(data => {
    //   console.log(data);
    // });
    this.getEmployees();
  }

  deleteEmployee(employee: Employee) {
    this._employeeService.removeEmployee(employee);
  }

  goToEdit(id: number) {
    this._router.navigate(['/edit/' + id]);
  }

  goToAdd() {
    this._router.navigate(['/add']);
  }
}
