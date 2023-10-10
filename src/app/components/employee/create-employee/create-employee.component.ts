import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/@core/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  // Declara o formulário - tipo FormGroup
  public formEmployee: FormGroup;
  public roleList: string[] = ['HairStylist', 'Manicure'];

  constructor(private formBuilder: FormBuilder, private service: EmployeeService) {
    // 1- chamar o atributo do formulário
    // 2- construir os atributos do formulário
    this.formEmployee = this.formBuilder.group({
      // inputs(atributos) do nosso formulário
      name: '',
      role: ''
    });
  }

  ngOnInit(): void {

  }

  // Criar um funcionário
  public createEmployee(): void {
    this.service.createEmployee(this.formEmployee.value);
  }
}
