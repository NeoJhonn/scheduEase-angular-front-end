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

createAppointment(schedule: Schedule): void {
  this.http.post(this.apiUrl, schedule)
      .subscribe({
        next: (response) => {
          console.log('Horário agendado com sucesso:', response);
          // Redirecionar para a página Agenda após o agendamento
          const param = {
            appointmentDate: schedule.appointmentDate
          }
          this.router.navigate(['schedule', param]);
        },
        error: (error) => {
          console.error('Erro ao agendar horário:', error);
        }
      });
}

updateAppointment(schedule: Schedule): void {
  this.http.put(this.apiUrl, schedule).subscribe({
    next: (response) => {
      console.log('Horário atualizado com sucesso:', response);
      // Redirecionar para a Agenda
      //this.router.navigate(['/schedule']);
      // Atualiza a página de funcionários
      window.location.href = '/schedule';
    },
    error: (error) => {
      console.error('Erro ao atualizar Horário:', error);
    }
  });
}

deleteAppointment(id: number): void {
  this.http.delete(`${this.apiUrl}/${id}`).subscribe({
    next: (response) => {
      console.log('Horário excluído com sucesso:', response);
      // Atualiza a página de funcionários
      window.location.href = '/schedule';
    },
    error: (error) => {
      console.error('Erro ao excluir o Horário:', error);
    }
  });
}

}
