import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class CreateEmployeeService {
  private apiUrl = 'https://scheduease-production.up.railway.app/api/employees';
  employee: any = {};
  

  constructor(private http: HttpClient) {
    
  }


  listEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/list-all`);
  }

  createEmployee(employee: any = {}): void {
    this.http.post(this.apiUrl, employee)
      .subscribe({
        next: (response) => {
          console.log('Funcionário cadastrado com sucesso:', response);
        },
        error: (error) => {
          console.error('Erro ao cadastrar funcionário:', error);
        }
      });
  }
}
