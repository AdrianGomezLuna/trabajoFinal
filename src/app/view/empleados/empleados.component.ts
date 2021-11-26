import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/core/servicios/employees.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  public empleados: any[] = [
    {id:'1',employee_name:'adri adsf',employee_salary:'230000',employee_age:'45',profile_image:''},
    {id:'2',employee_name:'adri adsf',employee_salary:'230000',employee_age:'45',profile_image:''},
    {id:'3',employee_name:'adri adsf',employee_salary:'230000',employee_age:'45',profile_image:''},
  ];
  public messagge: string = '';

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.messagge = '';
  //   this.employeesService.getEmployees().subscribe(
  //     (data) => {
  //       console.log('data',data);

  //       if (data.status) {
  //         this.empleados = data.data;
  //       } else {
  //         this.messagge = ' Error no se  puede acceder a la API'
  //       }
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   )
  }

}
