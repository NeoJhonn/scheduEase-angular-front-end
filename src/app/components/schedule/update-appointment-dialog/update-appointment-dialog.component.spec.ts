import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppointmentDialogComponent } from './update-appointment-dialog.component';

describe('UpdateAppointmentDialogComponent', () => {
  let component: UpdateAppointmentDialogComponent;
  let fixture: ComponentFixture<UpdateAppointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppointmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
