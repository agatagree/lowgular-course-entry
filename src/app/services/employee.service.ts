import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonModel} from "../model/person.model";
import {Observable} from "rxjs";
import {CreateEmployeeModel} from "../model/create-employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll() : Observable<PersonModel[]>{
    return this._httpClient.get<PersonModel[]>('assets/data/people.json');
  }

  create(employee: CreateEmployeeModel): Observable<any> {
    return this._httpClient.post('https://jsonplaceholder.typicode.com/posts?fbclid=IwAR0ehDDxNWRIC4MKGwcGxmJVjmX6KZNjNrqxeBYvawq-L1QWiCGBZWEGWwM', employee);
  }
}
