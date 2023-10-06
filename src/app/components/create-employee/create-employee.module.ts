import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee.component';
import { CreateEmployeeRoutingModule } from './create-employee.routing.modules';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    CreateEmployeeRoutingModule,
    DesignImportsModule,
    HttpClientModule
  ]
})
export class CreateEmployeeModule { }
