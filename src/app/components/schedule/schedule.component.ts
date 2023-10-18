import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/@core/models/schedule.model';
import { ScheduleService } from 'src/app/@core/services/schedule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateAppointmentDialogComponent } from './create-appointment-dialog/create-appointment-dialog.component';
import { DeleteAppointmentDialogComponent } from './delete-appointment-dialog/delete-appointment-dialog.component';



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
  appointmentDate: string = '';
  employeeId: number = 1;
  startTime: string = '';


  constructor(private service: ScheduleService, private router: Router, public dialog: MatDialog,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    if (this.appointmentDate === '') {

      this.listAppointments();
    }
    // if (this.appointmentDate !== '')
    // this.route.params.subscribe(params => {
    //   this.appointmentDate = params['appointmentDate'];
    // });
  }

  // Lista os funcionário cadastrados
  listAppointments() : void {
    //console.log(this.appointmentDate)
    this.service.listAppointments(this.formatDate(this.appointmentDate), this.employeeId).subscribe((data) => {
      this.schedules = data;
    });
  }

  // Agenda um horário
  createAppointment(hour: string) {
    this.startTime = this.formatHour(hour);
    // Pega os atributos do elemento e injeta na caixa de diálogo
    this.dialog.open(CreateAppointmentDialogComponent, {
      width: '400px',
      data: {
        appointmentDate: this.formatDate(this.appointmentDate),
        employeeId: this.employeeId,
        startTime: this.startTime
      },
    });
  }

  // Abri caixa de diálogo
  deleteAppointment(element: Schedule): void {
    // Pega os atributos do elemento e injeta na caixa de diálogo
    this.dialog.open(DeleteAppointmentDialogComponent, {
      width: '400px',
      data: {
        id: element.id,
        clientName: element.clientName,
        employeeId: element.employeeId,
        serviceBooked: element.serviceBooked,
        appointmentDate: element.appointmentDate,
        startTime: element.startTime,
        endTime: element.endTime
      },
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
      if (this.timeGrid.indexOf(hour) >= this.timeGrid.indexOf(this.formatHour(el.startTime))
      && this.timeGrid.indexOf(hour) <= this.timeGrid.indexOf(this.formatHour(el.endTime))) {
        // pegas os dois index do intevalo de hora marcada
        indexS = this.timeGrid.indexOf(this.formatHour(el.startTime));
        indexE = this.timeGrid.indexOf(this.formatHour(el.endTime));

      }
    }

      console.log( hour+" / "+indexS+" / "+indexE)



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
      if (this.timeGrid.indexOf(hour) > this.timeGrid.indexOf(this.formatHour(el.startTime))
      && this.timeGrid.indexOf(hour) <= this.timeGrid.indexOf(this.formatHour(el.endTime))) {
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
