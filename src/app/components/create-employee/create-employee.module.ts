import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee.component';
import { CreateEmployeeRoutingModule } from './create-employee.routing.modules';



@NgModule({
  declarations: [
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    CreateEmployeeRoutingModule
  ]
})
export class CreateEmployeeModule { }
