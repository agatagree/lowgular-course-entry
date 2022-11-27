import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    salary: new FormControl(),
    age: new FormControl(),
    img: new FormControl()
  });

  constructor(private _employeeService: EmployeeService) {
  }

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._employeeService.create(employeeForm.getRawValue()).subscribe(() => {
      alert("User was successfully added")
    })
}}
