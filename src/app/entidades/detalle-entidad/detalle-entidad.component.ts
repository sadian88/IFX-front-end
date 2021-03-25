import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { EntidadDTO } from '../entidad';
import { empleadoDTO } from '../../empleados/empleado';

import { EntidadesService } from '../entidad.service';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  constructor(private entidadesService: EntidadesService,
    private activatedRoute: ActivatedRoute ) { }

    entidad:String;

    empleados: empleadoDTO[] ;
    columnasAMostrar = ['id', 'nombre'];
    cantidadTotalRegistros;
    paginaActual = 1;
    cantidadRegistrosAMostrar = 10;


  ngOnInit(): void {
    this.cargar();
  }


  cargar(){
    this.activatedRoute.params.subscribe(params => {
      this.entidadesService.obtenerPorId(params.id).subscribe(entidad => {
        this.entidad = entidad.nombre;    
        this.empleados = entidad.empleados.map(emp => {
          return {id: emp.id, nombre: emp.nombre}
        });
      })
    })
  }

}
