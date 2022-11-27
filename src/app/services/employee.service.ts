import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {ApiResponse} from './api.response';
import { EmployeeApiModel} from "../model/employee-api.model";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<EmployeeApiModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeApiModel[]>>(
      'https://dummy.restapiexample.com/api/v1/employees',
      ).pipe(
        map((response:ApiResponse<EmployeeApiModel[]>) => {
          return response.data.map((employeeResponse: EmployeeResponse) => {
            return {
              id: employeeResponse.id,
              employee_name: employeeResponse.employee_name,
              employee_salary: employeeResponse.employee_salary,
              employee_age: employeeResponse.employee_age,
              profile_image: employeeResponse.profile_image,
              mail: employeeResponse.employee_name + "@lowgular.io",
            }
          });
        })
    );
  }

  create(employee: EmployeeApiModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ => void 0));
  }

  delete(id: number): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/' + id).pipe(map(_ =>void 0));
  }
}

