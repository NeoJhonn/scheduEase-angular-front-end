import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { ScheduleRoutingModule } from './schedule.routing.modules';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';



@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    DesignImportsModule
  ]
})
export class ScheduleModule { }
