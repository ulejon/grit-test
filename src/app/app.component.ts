import {Component} from '@angular/core';
import {Seating} from "./seating";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grid-test';

  seatings: Array<Seating> = [
    new Seating('24', 'Ferner Anette', '9237183', 'EB91.2 Telefonrekrytering Cati', 'CATI 41'),
    new Seating('45', 'Eliasson Agneta', '9236833', 'LKAB 2019 -', 'CATI 10'),
    new Seating('369', 'Sandberg Sebastian', '9235106', 'Attitudes to science - Huvudstudie', 'CATI 23'),
    new Seating('600', 'Jarl Rebecka', '9235136', 'Toyota & Lexus CR Nov-Dec 2018 - Toyota', 'CATI 14'),
    new Seating('300', 'Jehart Ebba', '9235136', 'Toyota & Lexus CR Nov-Dec 2018 - Toyota', 'CATI 15')
  ];

}
