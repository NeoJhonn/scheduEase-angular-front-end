import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/@core/models/schedule.model';
import { ScheduleService } from 'src/app/@core/services/schedule.service';

@Component({
  selector: 'app-delete-appointment-dialog',
  templateUrl: './delete-appointment-dialog.component.html',
  styleUrls: ['./delete-appointment-dialog.component.scss']
})
export class DeleteAppointmentDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Schedule, public dialogRef: MatDialogRef<DeleteAppointmentDialogComponent>,
  private router: Router, private http: HttpClient, private service: ScheduleService) { }

  ngOnInit(): void {
  }

  deleteAppointment(id: number): void {
    this.service.deleteAppointment(id);
    this.closeDialog();
  }

  // Fecha a caixa de diálogo
  closeDialog() {
    this.dialogRef.close();
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
}
