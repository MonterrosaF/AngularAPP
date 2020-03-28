import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-formulario-extras',
  templateUrl: './formulario-extras.component.html',
  styleUrls: ['./formulario-extras.component.css']
})
export class FormularioExtrasComponent implements OnInit {
  registros: string[] = [];
  constructor() {
  // constructor(private user: UserServiceService) {
    // this.user.getUsers().subscribe(data => {
      // data['registros'].map(value => {
        // this.user.push(value);
      // });
    // });
  }

  ngOnInit(): void {}
}
