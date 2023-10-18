import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateAppointmentDialogComponent } from './update-appointment-dialog.component';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UpdateAppointmentDialogComponent
  ],
  imports: [
    CommonModule,
    DesignImportsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UpdateAppointmentDialogModule { }
