import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './ui/employee-form/employee-form.component';
import { EmployeeFormComponentModule } from './ui/employee-form/employee-form.component-module';

const routes: Routes = [{ path: 'form', component: EmployeeFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
