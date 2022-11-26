import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import {EmployeeApiModel} from "../../model/employee-api.model";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  data$: Observable<EmployeeApiModel[] | null> = this._employeeService.getAll();
  constructor(private _employeeService: EmployeeService) {

  }

remove(id:number) {
  this._employeeService.delete(id).subscribe(() => {
    alert("User was successfully removed")
  })
}
}
