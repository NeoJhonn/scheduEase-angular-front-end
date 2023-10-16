import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { ScheduleRoutingModule } from './schedule.routing.modules';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateAppointmentDialogModule } from './create-appointment-dialog/create-appointment-dialog.module';




@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    HttpClientModule,
    DesignImportsModule,
    FormsModule,
    CreateAppointmentDialogModule
  ]
})
export class ScheduleModule { }
