import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/@core/models/schedule.model';
import { ScheduleService } from 'src/app/@core/services/schedule.service';

@Component({
  selector: 'app-create-appointment-dialog',
  templateUrl: './create-appointment-dialog.component.html',
  styleUrls: ['./create-appointment-dialog.component.scss']
})
export class CreateAppointmentDialogComponent implements OnInit {
  public timeGrid: String[] = ['8:00', '8:30','9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
   '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
  '22:00']
  public formAppointment: FormGroup;


  constructor(@Inject(MAT_DIALOG_DATA) public data: Schedule, public dialogRef: MatDialogRef<CreateAppointmentDialogComponent>,
  private router: Router, private http: HttpClient, private service: ScheduleService, private formBuilder: FormBuilder) {
    // 1- chamar o atributo do formulário
    // 2- construir os atributos do formulário
    this.formAppointment = this.formBuilder.group({
      // inputs(atributos) do nosso formulário
      clientName: "",
		  employeeId: 0,
		  serviceBooked: "",
		  appointmentDate: "",
		  startTime: "",
		  endTime: ""
    });
  }

  ngOnInit(): void {

  }

  // Fecha a caixa de diálogo
  closeDialog() {
    this.dialogRef.close();
  }

  createAppointment(): void {
    // Validar se o horário selecionado é válido
    if (this.timeGrid.indexOf(this.formatHour(this.formAppointment.value.endTime)) >= this.timeGrid.indexOf(this.formatHour(this.formAppointment.value.startTime))) {
    this.service.createAppointment(this.formAppointment.value);
    window.location.href = '/schedule'
    this.closeDialog();
  } else {
    alert("Selecine um horário de fim válido!")
  }
  }

  formatHour(hour: String): String {
    if (hour.includes('_')){
     return hour = hour.replace('H_', '').replace('_', ':');
    } else {
      hour = hour.replace(':', '_');
      hour = 'H_'+ hour
      return hour;
    }
  }

}
