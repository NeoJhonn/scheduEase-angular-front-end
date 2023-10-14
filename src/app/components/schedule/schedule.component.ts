import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/@core/models/schedule.model';


const ELEMENT_DATA: Schedule[] = [
  {
    id: 1,
    clientName: 'Vanusa',
    employeeId: 1,
    serviceBooked: 'botox',
    appointmentDate: '2023-10-09',
    startTime: '9:00',
    endTime: '11:30'
  },
  {
    id: 1,
    clientName: 'Carlos da Silva',
    employeeId: 1,
    serviceBooked: 'botox',
    appointmentDate: '2023-10-09',
    startTime: '13:30',
    endTime: '14:00'
  },
  {
    id: 1,
    clientName: 'Vini filho Flávio',
    employeeId: 1,
    serviceBooked: 'botox',
    appointmentDate: '2023-10-09',
    startTime: '14:30',
    endTime: '14:30'
  },
  {
    id: 1,
    clientName: 'Rosimeri Andrade',
    employeeId: 1,
    serviceBooked: 'botox',
    appointmentDate: '2023-10-09',
    startTime: '17:00',
    endTime: '19:30'
  },
  {
    id: 1,
    clientName: 'Lu Carioca',
    employeeId: 1,
    serviceBooked: 'pé e mão',
    appointmentDate: '2023-10-09',
    startTime: '20:30',
    endTime: '22:00'
  }

];



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
  public elements = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {


  }

  isFree(hour: string, elements: Schedule[]): boolean{
    let isFree: boolean = true;
    let intervals: String[] = [];
    let indexS: number = -1;
    let indexE: number = -1;

    // Pegar o elemento que tem um horário da vez do loop
    for (let el of elements) {
      if (this.timeGrid.indexOf(hour) >= this.timeGrid.indexOf(el.startTime)){
        // pegas os dois index do intevalo de hora marcada
        indexS = this.timeGrid.indexOf(el.startTime);
        indexE = this.timeGrid.indexOf(el.endTime);

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
      if (this.timeGrid.indexOf(hour) >= this.timeGrid.indexOf(el.startTime)){
        // pegas os dois index do intevalo de hora marcada
        indexS = this.timeGrid.indexOf(el.startTime)+1;
        indexE = this.timeGrid.indexOf(el.endTime);

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

  setReserved2(hour: string, elements: Schedule[]): boolean{
    let isFree: boolean = true;
    let intervals: String[] = [];
    let indexS: number = -1;
    let indexE: number = -1;

    // Pegar o elemento que tem um horário da vez do loop
    for (let el of elements) {
      if (this.timeGrid.indexOf(hour) >= this.timeGrid.indexOf(el.startTime)){
        // pegas os dois index do intevalo de hora marcada
        indexS = this.timeGrid.indexOf(el.startTime);
        indexE = this.timeGrid.indexOf(el.endTime);

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

  isIndexEquals(a: number, b: number): boolean {
    if (a === b) {
      return true;
    } else {
      return false;
    }

  }

}
