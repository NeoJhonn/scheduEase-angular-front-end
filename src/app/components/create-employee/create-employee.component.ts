import { Component, OnInit } from '@angular/core';
import { CreateEmployeeService } from 'src/app/services/create-employee.service';




@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'role', 'action'];

  // Lista de funcionários cadastrados do servidor em produção
  public employeeList: any;

  constructor(private service: CreateEmployeeService) { }

  ngOnInit(): void {
    this.service.listEmployees().subscribe((data) => {
      this.employeeList = data;
    });
  }

}
