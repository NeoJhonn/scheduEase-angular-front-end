import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateEmployeeComponent } from './update-employee.component';
import { UpdateEmployeeRoutingModule } from './update-employee.routing.modules';


@NgModule({
  declarations: [
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    UpdateEmployeeRoutingModule
  ]
})
export class UpdateEmployeeModule { }
