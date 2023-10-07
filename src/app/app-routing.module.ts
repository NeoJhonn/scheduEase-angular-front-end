import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Aqui colocamos nossas rotas
const routes: Routes = [
  // criar uma rota - Objeto de rota
  // 1 - zerar rotas
  { path: '', pathMatch: 'full', redirectTo: 'home'},
   // 2 - criar a rota da Home
  // defino rota e defino componente
  {path: 'home',
    loadChildren: () =>
    import('./components/home/home.module').then((m) => m.HomeModule)
  },
  // 3 - criar a rota de Create Employee
  // defino rota e defino componente
  {path: 'employee',
    loadChildren: () =>
    import('./components/employee/employee.module').then((m) => m.EmployeeModule)
  },
  // 4 - criar a rota de Schedule
  // defino rota e defino componente
  {path: 'schedule',
    loadChildren: () =>
    import('./components/schedule/schedule.module').then((m) => m.ScheduleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
