import { Component } from '@angular/core';

@Component({
  selector: 'app-vista-formulario',
  templateUrl: './vista-formulario.component.html',
  styleUrls: ['./vista-formulario.component.css']
})
export class VistaFormularioComponent {
  constructor() {}

  headers = [
    'documento',
    'nombre',
    'fecha_ini',
    'fecha_fin',
    'horario_ini',
    'horario_fin',
    'horario_ini_extra',
    'horario_fin_extra',
    'motivo'
  ];

  rows = [
    {
      documento: 123,
      nombre: 'test1',
      fecha_ini: '2020-01-01',
      fecha_fin: '2020-01-02',
      horario_ini: '22:00',
      horario_fin: '23:00',
      horario_ini_extra: '22:00',
      horario_fin_extra: '23:00',
      motivo: 'Test'
    },
    {
      documento: 123,
      nombre: 'test1',
      fecha_ini: '2020-01-01',
      fecha_fin: '2020-01-02',
      horario_ini: '22:00',
      horario_fin: '23:00',
      horario_ini_extra: '22:00',
      horario_fin_extra: '23:00',
      motivo: 'Test'
    },
    {
      documento: 123,
      nombre: 'test1',
      fecha_ini: '2020-01-01',
      fecha_fin: '2020-01-02',
      horario_ini: '22:00',
      horario_fin: '23:00',
      horario_ini_extra: '22:00',
      horario_fin_extra: '23:00',
      motivo: 'Test'
    }
  ];
}
