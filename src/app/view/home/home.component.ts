import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public competencias: string[] = [
    'HTML',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Bootstrap',
    'Responsive Design',
    'Accesibilidad'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
