import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Tarea } from './tarea';
import {  trigger,  state,  style,  transition,  animate,} from '@angular/animations';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  providers: [],
  animations: [
    trigger('rowExpansionTrigger', [
      state(
        'void',
        style({
          transform: 'translateX(-10%)',
          opacity: 0,
        })
      ),
      state(
        'active',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ]
})

export class TareasComponent implements OnInit {


  tareas: Tarea[] = [
    {id: 0, nombre: 'HU_FCRE_03', asignado: 'Juan Jimenez', categoria: 'HU',porcentaje: 2, status: 'Analisis', subTareas :[{id: 0, nombre: "analisis", horas: 2, status: ""}]},
    {id: 1, nombre: 'HU_FCRE_06', asignado: 'David Rodriguez', categoria: 'HU',porcentaje: 3, status: 'Desarrollo', subTareas :[{id: 0, nombre: "analisis", horas: 5, status: ""},{id: 1, nombre: "Desarrollo", horas: 9, status: ""}]}
  
  ];
  products: Product[] = [];

  constructor() { }


  ngOnInit() {
    
  }

}
