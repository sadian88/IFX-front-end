import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { empleadoDTO } from '../empleado';
import { EmpleadosService } from '../empleados.services';

@Component({
  selector: 'app-indice-empleados',
  templateUrl: './indice-empleados.component.html',
  styleUrls: ['./indice-empleados.component.css']
})
export class IndiceEmpleadosComponent implements OnInit {

  constructor(private empleadosService: EmpleadosService) { }

  @ViewChild('table')
  table: MatTable<any>;

  empleados: empleadoDTO[];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros();
  }

  cargarRegistros(){
    this.empleadosService.obtenerTodos()
    .subscribe((respuesta) => {
      console.log(respuesta);
      this.empleados = respuesta;
    }, error => console.error(error));
  }

  borrar(id: number){
    this.empleadosService.borrar(id)
    .subscribe(() => {
      this.cargarRegistros();
    }, error => console.error(error));
  }

}
