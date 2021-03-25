import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { empleadoCreacionDTO } from '../empleado';
import { EmpleadosService } from '../empleados.services';

@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-empleados.component.html',
  styleUrls: ['./crear-empleados.component.css']
})
export class CrearEmpleadosComponent {

  errores: string[] = [];

  constructor(private router: Router, private empleadosService: EmpleadosService) { }
  
  guardarCambios(empleado: empleadoCreacionDTO) {
    this.empleadosService.crear(empleado).subscribe(
      () => {
        this.router.navigate(['/empleados']);
      },
      (error) => this.errores = parsearErroresAPI(error)
    );
  }

}
