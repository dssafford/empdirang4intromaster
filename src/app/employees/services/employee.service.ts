import {Injectable} from '@angular/core';
import {Employee} from '../models/employee';
import {EMPLOYEES} from '../data/employee-data';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class EmployeeService {
  NEW_ID = 16;
  data = EMPLOYEES;

  api = 'http://localhost:8003/api/';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    // console.log('list below');
    // console.log(this.http.get(this.api).toPromise());
    return this.http.get<Employee[]>(this.api + '/EmployeeList');
  }

  deleteEmployee(id: number): Observable<Employee> {
    console.log('in deleteEmployee');

    return this.http.get('http://localhost:8003/api/EmployeeDelete/' + id);

    // return Promise.resolve(this.data).then(
    //   employees => employees.filter(employee => employee.id === id)[0]
    // );
  }
  getEmployee(id: number): Observable<Employee> {
    console.log('in getEmployee');

    return this.http.get('http://localhost:8003/api/EmployeeDelete/' + id);

    // return Promise.resolve(this.data).then(
    //   employees => employees.filter(employee => employee.id === id)[0]
    // );
  }

addEmployee(employee: Employee): Observable<number> {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const year = today.getFullYear();
    // console.log('in addEmployee');
    employee.createDate = '03-03-2018';
    // console.log('employee below');
    // console.log(employee);

    return this.http.post('http://localhost:8003/api/EmployeeAdd',
      employee);
      // .map(success => success.status)
      // .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('ERROR OCCURRED TALKING TO SERVER' + error);
    return Promise.reject(error.message || error);
  }

  // removeEmployee(employee: Employee): Promise<Employee[]> {
  //   const index = this.data.indexOf(employee);
  //   return Promise.resolve(this.data)
  //     .then(employees => employees.splice(index, 1));
  // }
}
