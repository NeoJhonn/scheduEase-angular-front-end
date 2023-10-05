import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee.component';
import { CreateEmployeeRoutingModule } from './create-employee.routing.modules';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';



@NgModule({
  declarations: [
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    CreateEmployeeRoutingModule,
    DesignImportsModule
  ]
})
export class CreateEmployeeModule { }
