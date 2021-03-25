import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { empleadoCreacionDTO, empleadoDTO } from '../empleado';
import { EmpleadosService } from '../empleados.services';

@Component({
  selector: 'app-editar-empleados',
  templateUrl: './editar-empleados.component.html',
  styleUrls: ['./editar-empleados.component.css']
})
export class EditarEmpleadosComponent implements OnInit {

  constructor(
    private router: Router,
    private empleadosService: EmpleadosService,
    private activatedRoute: ActivatedRoute
  ) {}

  modelo: empleadoDTO;
  errores: string[] = [];

  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((params) => {
      this.empleadosService.obtenerPorId(params.id)
      .subscribe(empleado => {
        this.modelo = empleado;
      }, () => this.router.navigate(['/empleados']))
    });

    console.log("Sale del Init");
  }

  guardarCambios(empleado: empleadoCreacionDTO) {
    console.log("Entra en guardar");

    this.empleadosService.editar(this.modelo.id, empleado)
    .subscribe(() => {
      this.router.navigate(['/empleados']);
    }, error => this.errores = parsearErroresAPI(error))

  }

}
