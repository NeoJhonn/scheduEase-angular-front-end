import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Schedule } from '../models/schedule.model';
import { Urls } from '../url';

@Injectable({
  providedIn: 'any'
})
export class ScheduleService {
// Api que será consumida
private apiUrl = Urls.SCHEDULE_BACK;


constructor(private http: HttpClient, private router: Router) {

}

listAppointments(date: string, employeeId: number): Observable<Schedule[]> {
  return this.http.get<Schedule[]>(`${this.apiUrl}/list-appointments?appointmentDate=${date}&id=${employeeId}`);
}



}
