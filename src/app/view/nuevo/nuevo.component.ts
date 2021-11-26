import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Employees } from '../../core/interfaces/employees.interface';
import { EmployeesService } from '../../core/servicios/employees.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  public empleado: Employees;
  reactiveForm;
  public messagge: string = '';

  constructor(
    private fb: FormBuilder,
    private empleadosService: EmployeesService,
    private alertConfig: NgbAlertConfig) {

      this.empleado = new Employees('', 0 , 0);
      this.messagge = '';
      this.reactiveForm = this.fb.group({
        employee_name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
        employee_salary: ['', [Validators.required]],
        employee_age: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      });

      // customize default values of alerts used by this component tree
      alertConfig.type = 'success';
      alertConfig.dismissible = false;
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.reactiveForm);
    this.empleado.employee_name = this.reactiveForm.get('employee_name')?.value;
    this.empleado.employee_salary = this.reactiveForm.get('employee_salary')?.value;
    this.empleado.employee_age = this.reactiveForm.get('employee_age')?.value;
    if (this.empleadosService.createEmployee(this.empleado)) {
      console.log('Creado');
      this.messagge = 'El empleado se creó correctamente';

    } else {
      console.log('No creado');
      this.messagge = 'Error al crear el usuario';

    }

  }

  get employee_name() { return this.reactiveForm.get('employee_name');}
  get employee_salary() { return this.reactiveForm.get('employee_salary');}
  get employee_age() { return this.reactiveForm.get('employee_age');}
}
