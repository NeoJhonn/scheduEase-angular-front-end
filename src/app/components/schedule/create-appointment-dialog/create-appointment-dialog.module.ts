import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';
import { CreateAppointmentDialogComponent } from './create-appointment-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateAppointmentDialogComponent
  ],
  imports: [
    CommonModule,
    DesignImportsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateAppointmentDialogModule { }
