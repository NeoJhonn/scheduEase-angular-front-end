import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';

// Aqui colocamos nossas rotas
const routes: Routes = [
  {path: '', component: EmployeeComponent},
  // caso tivesse filhos estaria aqui
  // {path: 'filho', component: EmployeeFilhoComponent}
  {path: 'create-employee',
    loadChildren: () =>
    import('../employee/create-employee/create-employee.module').then((m) => m.CreateEmployeeModule)
  },
  // {path: 'filho', component: EmployeeFilhoComponent}
  {path: 'update-employee',
    loadChildren: () =>
    import('../employee/update-employee/update-employee.module').then((m) => m.UpdateEmployeeModule)
  }

];

// Principal arquivo de roteamento
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
