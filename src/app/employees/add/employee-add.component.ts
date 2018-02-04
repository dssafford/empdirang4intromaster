import {Component, OnInit} from '@angular/core';

import {Employee} from '../models/employee';
import {Router} from '@angular/router';
import {EmployeeService} from '../services/employee.service';

@Component({
  templateUrl: 'employee-add.component.html'
})

export class EmployeeAddComponent implements OnInit {
  title = 'Add New Employee';
  newEmployee: Employee;

  statusCode: number;

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit() {
    this.newEmployee = new Employee();
  }

  // addNewEntry(entryItem: EntryItem): Promise<EntryItem> {
  //   return this.http
  //     .post('http://localhost:3000' + '/entry', entryItem)
  //     .toPromise()
  //     .then(response => response as EntryItem)
  //     .catch(this.handleError);
  // }

//   this.entryService.addNewEntry(this.entry_in_progress)
// .then((entryItem) => {
//   this.router.navigateByUrl('home');
// });

  saveEmployee(employee: Employee) {

    this.employeeService.addEmployee(this.newEmployee)
      .subscribe(
        data => this.statusCode = data,
        errorCode => this.statusCode = errorCode
      );
    console.log('status code = ' + this.statusCode);
    this.router.navigateByUrl('/employees');
  }

  cancelAdd() {
    this.router.navigateByUrl('/employees');
  }

}
