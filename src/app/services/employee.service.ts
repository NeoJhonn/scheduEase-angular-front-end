import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'any'
})
export class EmployeeService {
  // Api que será consumida
  private apiUrl = 'https://scheduease-production.up.railway.app/api/employees';


  constructor(private http: HttpClient, private router: Router) {

  }


  listEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/list-all`);
  }

  createEmployee(employee: any = {}): void {
    this.http.post(this.apiUrl, employee)
      .subscribe({
        next: (response) => {
          console.log('Funcionário cadastrado com sucesso:', response);
          // Redirecionar para a página Funcionário após o cadastro
          this.router.navigate(['/employee']);
        },
        error: (error) => {
          console.error('Erro ao cadastrar funcionário:', error);
        }
      });
  }

  updateEmployee(employee: any = {}): void {
    this.http.put(this.apiUrl, employee).subscribe({
      next: (response) => {
        console.log('Funcionário atualizado com sucesso:', response);
        // Redirecionar para a lista de funcionários
        this.router.navigate(['/employee']);
      },
      error: (error) => {
        console.error('Erro ao atualizar funcionário:', error);
      }
    });
  }

  deleteEmployee(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: (response) => {
        console.log('Funcionário excluído com sucesso:', response);
        // Atualiza a página de funcionários
        window.location.href = '/employee';
      },
      error: (error) => {
        console.error('Erro ao excluir funcionário:', error);
      }
    });
  }
}
