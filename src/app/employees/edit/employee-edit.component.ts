import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Employee} from '../models/employee';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {EmployeeService} from '../services/employee.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: '<app-employee-detail>',
  templateUrl: 'employee-edit.component.html'
})

export class EmployeeEditComponent implements OnInit {
  employee: Employee;
  myId: number;

  constructor(private _employeeService: EmployeeService,
              private _route: ActivatedRoute,
              private _location: Location) {
    this._route.params.subscribe( params => this.getEmployee(params['id']));
  }

  ngOnInit() {}

  getEmployee(empId: number) {
    console.log(' in getEmployee');
    console.log('id = ' + empId);
    // const id: Observable<string> = this._route.params.map(p => p.id);
    // this._route.params.subscribe( params => console.log(params));
    // this._route.params.subscribe(params => {
    //   this._employeeService.getEmployee(empId)
    //     .then(employee => this.employee = employee);
    // });

    this._employeeService.getEmployee(empId)
      .subscribe(employee => this.employee = employee);


  }

  backToDirectory(event: any) {
    this._location.back();
  }
}
