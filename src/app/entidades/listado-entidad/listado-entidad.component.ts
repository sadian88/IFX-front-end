import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { EntidadDTO } from '../entidad';
import { EntidadesService } from '../entidad.service';
import { SeguridadService } from '../../seguridad/seguridad.service';
import { AutorizadoComponent } from '../../seguridad/autorizado/autorizado.component'

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  constructor(private entidadesService: EntidadesService , seguridadService: SeguridadService ) { }

  @ViewChild('table')
  table: MatTable<any>;

  
  entidades: EntidadDTO[];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  
  ngOnInit(): void {
      this.cargarRegistros();
  }

   cargarRegistros(){
    this.entidadesService.obtenerTodos()
    .subscribe((respuesta) => {
      console.log(respuesta);
      this.entidades = respuesta;
    }, error => console.error(error));
  }

  borrar(id: number){
    this.entidadesService.borrar(id)
    .subscribe(() => {
      this.cargarRegistros();
    }, error => console.error(error));
  }

}
