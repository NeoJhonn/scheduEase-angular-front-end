import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';


export interface Employee {
  id: number,
  name: string,
  role: string
}

@Component({
  selector: 'app-delete-employee-dialog',
  templateUrl: './delete-employee-dialog.component.html',
  styleUrls: ['./delete-employee-dialog.component.scss']
})
export class DeleteEmployeeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Employee, public dialogRef: MatDialogRef<DeleteEmployeeDialogComponent>,
  private router: Router, private http: HttpClient, private service: EmployeeService) { }

  ngOnInit(): void {
  }

  // Fecha a caixa de diálogo
  closeDialog() {
    this.dialogRef.close();
  }

  deleteEmployee(id: number): void {
    this.service.deleteEmployee(id);
    this.closeDialog();
  }

}
