import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  // Declara o formulário - tipo FormGroup
  public formEmployee: FormGroup;
  public roleList: string[] = ['HairStylist', 'Manicure'];

  // Dados do fucionário
  employeeId: number | undefined;
  employeeName: string = "";
  employeeRole: string = "";


  constructor(private formBuilder: FormBuilder, private service: EmployeeService, private route: ActivatedRoute, private http: HttpClient) {
    // 1- chamar o atributo do formulário
    // 2- construir os atributos do formulário
    this.formEmployee = this.formBuilder.group({
      // inputs(atributos) do nosso formulário
      id: 0,
      name: '',
      role: ''
    });
  }

  ngOnInit(): void {
    this.setEmployeeProperties()
  }

  updateEmployee(): void {
    console.log(this.formEmployee.value)

    this.service.updateEmployee(this.formEmployee.value);
  }

  setEmployeeProperties() {
    this.route.params.subscribe(params => {
      this.employeeId = +params['id']; // Converte o ID para número
      this.employeeName = params['name'];
      this.employeeRole = params['role'];
    });
  }

}
