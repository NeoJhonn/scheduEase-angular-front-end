import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteEmployeeDialogComponent } from './delete-employee-dialog.component';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';



@NgModule({
  declarations: [
    DeleteEmployeeDialogComponent
  ],
  imports: [
    CommonModule,
    DesignImportsModule
  ]
})
export class DeleteEmployeeDialogModule { }
