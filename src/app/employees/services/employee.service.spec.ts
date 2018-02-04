import { Employee } from '../../../app/employees/models/employee';
import { EmployeeService } from '../../../app/employees/services/employee.service';
import { MOCK_DATA } from '../../../app/employees/data/mock-data';

describe('Employee Service Tests', () => {
    let employeeService: EmployeeService;

    // beforeEach(() => {
    //   employeeService =  new EmployeeService();
    //   employeeService.data = MOCK_DATA;
    // });

	 // it('returns a list of employees', () => {
    //     employeeService.getEmployees()
    //         .then(employees => {
    //             expect(employees.length).toBeDefined();
    //             expect(employees.length).toBe(3);
    //         });
    // });

    // it('returns a single employee by id', () => {
    //   const testEmployee = (employee: Employee) => {
    //           expect(employee).toBeDefined();
    //           expect(employee.firstName).toBe('Test2');
    //           expect(employee.lastName).toBe('Employee2');
    //       };
    //
    //       employeeService.getEmployee(2)
    //           .then(testEmployee);
    // });



//   getEmployee(id: number): Promise<Employee> {
//     return Promise.resolve(this.data).then(
//       employees => employees.filter(employee => employee.id === id)[0]
//     );
// }
//     it('another way to get a single employee and test', () => {
//
//       employeeService.getEmployee(2).subscribe((result)) =>{
//           expect(result.length).toBe(HEROES.length);
//           expect(result).toBe(HEROES);
//           // expect(spy).toHaveBeenCalledTimes(1);
//           // expect(spy).toHaveBeenCalledWith('HeroService: fetched heroes');
//           //
//       }
//
//       // heroService.getHeroes().subscribe((result) => {
//       //   expect(result.length).toBe(HEROES.length);
//       //   expect(result).toBe(HEROES);
//       //   expect(spy).toHaveBeenCalledTimes(1);
//       //   expect(spy).toHaveBeenCalledWith('HeroService: fetched heroes');
//       // });
//
//       backend.expectOne('api/heroes').flush(HEROES)
//
//   });

    // it('add a new employee', () => {
    //     const newEmployee: Employee = new Employee();
    //     const testNewEmployee = (employee: Employee) => {
    //         expect(employee).toBeDefined();
    //         expect(employee.firstName).toBe('John');
    //         expect(employee.lastName).toBe('Doe');
    //     };
    //
    //     newEmployee.id = 222;
    //     newEmployee.firstName = 'John';
    //     newEmployee.lastName = 'Doe';
    //
    //     employeeService.addEmployee(newEmployee)
    //         .then(() => employeeService.getEmployee(222).then(testNewEmployee));
    // });

    // it('removes an employee', () => {
    //     let employeeCount = 0;
    //
    //     const postRemoveCallback = () =>
    //         employeeService.getEmployees()
    //             .then(postEmployees => expect(postEmployees.length).toBe(employeeCount - 1));
    //
    //     const getEmployeeCallback = (employee: Employee) =>
    //         employeeService.removeEmployee(employee)
    //             .then(postRemoveCallback);
    //
		// const preRemoveCallback = (preEmployees: Employee[]) => {
    //         employeeCount = preEmployees.length;
    //
    //         employeeService.getEmployee(1)
    //             .then(getEmployeeCallback);
		// };
    //
    //     employeeService.getEmployees()
    //         .then(preRemoveCallback);
    // });
});
