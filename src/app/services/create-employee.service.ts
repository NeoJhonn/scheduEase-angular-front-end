import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class CreateEmployeeService {
  private apiUrl = 'https://scheduease-production.up.railway.app/api';

  constructor(private http: HttpClient) { }


  listEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employees/list-all`);
  }
}
