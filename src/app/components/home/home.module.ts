import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.modules';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DesignImportsModule
  ]
})
export class HomeModule { }
