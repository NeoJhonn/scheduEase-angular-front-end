import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee.routing.modules';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmployeeRoutingModule } from './create-employee/create-employee.routing.modules';




@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    DesignImportsModule,
    HttpClientModule
  ]
})
export class EmployeeModule { }
