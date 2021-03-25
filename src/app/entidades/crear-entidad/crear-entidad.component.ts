import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empleadoDTO } from 'src/app/empleados/empleado';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { EntidadCreacionDTO, EntidadPostGet } from '../entidad';
import { EntidadesService } from '../entidad.service';

@Component({
  selector: 'app-crear-entidad',
  templateUrl: './crear-entidad.component.html',
  styleUrls: ['./crear-entidad.component.css']
})
export class CrearEntidadComponent implements OnInit {

  constructor(private entidadesService: EntidadesService,
    private router: Router) { }

  errores: string[] = [];
  empleadosNoSeleccionados: MultipleSelectorModel[];
  

  ngOnInit(): void {

    this.entidadesService.postGet()
    .subscribe(resultado => {

      this.empleadosNoSeleccionados = resultado.empleados.map(empleado => {
        return <MultipleSelectorModel>{llave: empleado.id, valor: empleado.nombre}
      });

    }, error => console.error(error));

  }

  guardarCambios(entidad: EntidadCreacionDTO){
    this.entidadesService.crear(entidad)
    .subscribe((id: number) => this.router.navigate(['/entidades/']),
    error => this.errores = parsearErroresAPI(error));
  }

}
 