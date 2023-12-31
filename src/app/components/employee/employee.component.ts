import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/@core/services/employee.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteEmployeeDialogComponent } from './delete-employee-dialog/delete-employee-dialog.component';
import { Employee } from 'src/app/@core/models/employee.model';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'role', 'action'];

  // Lista de funcionários cadastrados do servidor em produção
  public employeeList: Employee[] = [];


  constructor(private service: EmployeeService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listAllEmployees()

  }

  // Lista os funcionário cadastrados
  listAllEmployees() : void {
    this.service.listEmployees().subscribe((data) => {
      this.employeeList = data;
    });
  }

  // Redireciona para a página de criação de funcionário
  createEmployee(): void {
    this.router.navigate(['employee/create-employee']);
  }

  // Redireciona para a página de update
  updateEmployee(element: Employee): void {
    // Pega os parâmetros do elemento que vai ser editado
    const params ={
      id: element.id,
      name: element.name,
      role: element.role
    }

    // envia os parâmetros para a página de update
    this.router.navigate(['employee/update-employee', params]);
  }

   // Abri caixa de diálogo
  openDialog(element: Employee): void {
    // Pega os atributos do elemento e injeta na caixa de diálogo
    this.dialog.open(DeleteEmployeeDialogComponent, {
      width: '400px',
      data: {
        id: element.id,
        name: element.name,
        role: element.role
      },
    });
  }
}


