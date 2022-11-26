import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonModel } from '../../model/person.model';
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee-faces',
  templateUrl: './employee-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFacesComponent {
  constructor(private _employeeService: EmployeeService) {}
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();
}
