import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEmployeeComponent } from './update-employee.component';

// Aqui colocamos nossas rotas
const routes: Routes = [
  {path: '', component: UpdateEmployeeComponent}
  // caso tivesse filhos estaria aqui
  // {path: 'filho', component: HomeFilhoComponent}
];

// Principal arquivo de roteamento
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UpdateEmployeeRoutingModule { }
