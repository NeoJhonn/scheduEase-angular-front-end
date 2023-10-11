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
    endTime: '10:30'
  },
  {
    id: 1,
    clientName: 'João da Silva',
    employeeId: 1,
    serviceBooked: 'corte',
    appointmentDate: '2023-10-09',
    startTime: '16:00',
    endTime: '17:00'
  },
  {
    id: 1,
    clientName: 'Amanda Nothen',
    employeeId: 1,
    serviceBooked: 'hidratação',
    appointmentDate: '2023-10-09',
    startTime: '11:00',
    endTime: '11:30'
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
    this.listFreeHours();

  }

  listFreeHours(): String[] {
    var freeHours: String[] = this.timeGrid;
    let index: number = 0

    for (let hour of this.timeGrid) {
      for (let element of this.elements) {
        if (hour === element.startTime) {
            index = this.timeGrid.indexOf(hour);  
            freeHours = freeHours.filter(item => item !== hour);          
        }
        }
    }
    console.log(freeHours);
    return freeHours;
  }

}
