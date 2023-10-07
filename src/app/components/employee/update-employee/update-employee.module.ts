import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateEmployeeComponent } from './update-employee.component';
import { UpdateEmployeeRoutingModule } from './update-employee.routing.modules';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    UpdateEmployeeRoutingModule,
    DesignImportsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UpdateEmployeeModule { }
