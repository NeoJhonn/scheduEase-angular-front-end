import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteAppointmentDialogComponent } from './delete-appointment-dialog.component';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';



@NgModule({
  declarations: [
    DeleteAppointmentDialogComponent
  ],
  imports: [
    CommonModule,
    DesignImportsModule
  ]
})
export class DeleteAppointmentDialogModule { }
