import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/@core/models/schedule.model';
import { ScheduleService } from 'src/app/@core/services/schedule.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  public timeGrid: String[] = ['8:00', '8:30','9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
   '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
  '22:00']
  displayedColumns: string[] = ['time', 'name', 'service', 'action'];
  dataSource = this.timeGrid;
  public schedules: Schedule[] = [];
  // Formato desejado para o matDatepicker.
  datepickerFormat: string = 'yyyy-MM-dd';
  date: string = '';

  constructor(private service: ScheduleService, private router: Router) {

  }

  ngOnInit(): void {
    console.log('Testando formatação: '+this.formatHour('17:30'))

  }

  // Lista os funcionário cadastrados
  listAppointments(employeeId: number) : void {
    console.log(this.date);
    this.service.listAppointments(this.formatDate(this.date), employeeId).subscribe((data) => {
      this.schedules = data;
      console.log(data);
    });
  }

  formatHour(hour: string): string {
    if (hour.includes('_')){
     return hour = hour.replace('H_', '').replace('_', ':');
    } else {
      hour = hour.replace(':', '_');
      hour = 'H_'+ hour
      return hour;
    }
  }

  formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    if (isNaN(date.getTime())) {
      return 'Data inválida';
    }
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // O mês começa em 0, então somamos 1 e formatamos.
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  isFree(hour: string, elements: Schedule[]): boolean{
    let isFree: boolean = true;
    let intervals: String[] = [];
    let indexS: number = -1;
    let indexE: number = -1;

    // Pegar o elemento que tem um horário da vez do loop
    for (let el of elements) {
      if (this.timeGrid.indexOf(hour) >= this.timeGrid.indexOf(this.formatHour(el.startTime))) {
        // pegas os dois index do intevalo de hora marcada
        indexS = this.timeGrid.indexOf(this.formatHour(el.startTime));
        indexE = this.timeGrid.indexOf(this.formatHour(el.endTime));

      }
    }

    if (indexE === -1 && indexS === -1) {
      isFree = true;
    } else {
      if ( indexS === indexE) {
        intervals.push(this.timeGrid[indexS]);
        // seta falso nesse intervalo para econder o botão Agendar
      for (let h of intervals) {
        if (this.timeGrid.indexOf(hour) === this.timeGrid.indexOf(h)) {
          isFree = false;
        }
      }
      } else {
    // popula o array com os horário do intevalo
    for (let i= indexS; i <= indexE; i++) {
      intervals.push(this.timeGrid[i]);
    }

    // seta falso nesse intervalo para econder o botão Agendar
    for (let h of intervals) {
      if (this.timeGrid.indexOf(hour) === this.timeGrid.indexOf(h)) {
        isFree = false;
      }
    }
  }
  }

    return isFree;
  }

  setReserved(hour: string, elements: Schedule[]): boolean{
    let isFree: boolean = true;
    let intervals: String[] = [];
    let indexS: number = -1;
    let indexE: number = -1;

    // Pegar o elemento que tem um horário da vez do loop
    for (let el of elements) {
      if (this.timeGrid.indexOf(hour) >= this.timeGrid.indexOf(this.formatHour(el.startTime))) {
        // pegas os dois index do intevalo de hora marcada
        indexS = this.timeGrid.indexOf(this.formatHour(el.startTime))+1;
        indexE = this.timeGrid.indexOf(this.formatHour(el.endTime));

      }
    }

    if (indexE === -1 && indexS === -1) {
      isFree = true;
    } else {
      if ( indexS === indexE) {
        intervals.push(this.timeGrid[indexS]);
        // seta falso nesse intervalo para econder o botão Agendar
      for (let h of intervals) {
        if (this.timeGrid.indexOf(hour) === this.timeGrid.indexOf(h)) {
          isFree = false;
        }
      }
      } else {
    // popula o array com os horário do intevalo
    for (let i= indexS; i <= indexE; i++) {
      intervals.push(this.timeGrid[i]);
    }

    // seta falso nesse intervalo para econder o botão Agendar
    for (let h of intervals) {
      if (this.timeGrid.indexOf(hour) === this.timeGrid.indexOf(h)) {
        isFree = false;
      }
    }
  }
  }

    return isFree;
  }



}
