import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/@core/models/schedule.model';


const ELEMENT_DATA: Schedule[] = [
  {
    id: 1,
    clientName: 'Fabiana da Silva',
    employeeId: 1,
    serviceBooked: 'mechas',
    appointmentDate: '2023-10-09',
    startTime: '9:00',
    endTime: '11:30'
  },
  {
    id: 1,
    clientName: 'José Figueredo',
    employeeId: 1,
    serviceBooked: 'corte',
    appointmentDate: '2023-10-09',
    startTime: '13:30',
    endTime: '14:00'
  },
  {
    id: 1,
    clientName: 'Rosana souza',
    employeeId: 1,
    serviceBooked: 'botox',
    appointmentDate: '2023-10-09',
    startTime: '17:00',
    endTime: '19:30'
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
  public count: number = 0;
  public control: boolean =  false;

  public elements = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {


  }

  isFree(hour: string, elements: Schedule[]): boolean{
    let isFree: boolean = true;
    let intervals: String[] = [];
   
    let indexS: number = -1;
    let indexE: number = -1;

    for (let el of elements) {
      if (hour !== el.startTime){
        indexS = this.timeGrid.indexOf(el.startTime);
        indexE = this.timeGrid.indexOf(el.endTime);
      }
    }


    

    console.log(indexS);
    console.log(indexE);
    for (let i= indexS; i <= indexE; i++) {
      intervals.push(this.timeGrid[i]);
    }

    for (let h of intervals) {
      if (this.timeGrid.indexOf(hour) === this.timeGrid.indexOf(h)) {
        isFree = false;
      }
    }

    console.log(intervals);
    

    return isFree;
  }

  

}
