import { Component, OnInit } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesService } from 'src/app/core/servicios/employees.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  public empleados: any[] = [
    // {id:'1',employee_name:'adri adsf',employee_salary:'230000',employee_age:'45',profile_image:''},
    // {id:'2',employee_name:'adri adsf',employee_salary:'230000',employee_age:'45',profile_image:''},
    // {id:'3',employee_name:'adri adsf',employee_salary:'230000',employee_age:'45',profile_image:''},
  ];
  public messagge: string = '';

  constructor(private employeesService: EmployeesService, private alertConfig: NgbAlertConfig) { }

  ngOnInit(): void {
    this.messagge = '';
    this.employeesService.getEmployees().subscribe(
      (resp) => {
        console.log('data',resp.data);

        if (resp.status==="success") {
          this.empleados = resp.data;
        } else {
          this.messagge = ' Error no se  puede acceder a la API'
        }
      },
      (error) => {
        console.error(error);
      }
    )
          // customize default values of alerts used by this component tree
          this.alertConfig.type = 'success';
          this.alertConfig.dismissible = false;
  }

}
