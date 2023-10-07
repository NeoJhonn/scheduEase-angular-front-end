import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'role', 'action'];

  // Lista de funcionários cadastrados do servidor em produção
  public employeeList: any;

  constructor(private service: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.service.listEmployees().subscribe((data) => {
      this.employeeList = data;
    });
  }

  deleteEmployee(id: number): void {
    this.router.navigate(['/home']);
  }

}
