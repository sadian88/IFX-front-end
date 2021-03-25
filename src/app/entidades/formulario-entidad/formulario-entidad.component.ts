import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empleadoCreacionDTO } from 'src/app/empleados/empleado';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { EntidadCreacionDTO, EntidadDTO } from '../entidad';

@Component({
  selector: 'app-formulario-entidad',
  templateUrl: './formulario-entidad.component.html',
  styleUrls: ['./formulario-entidad.component.css']
})
export class FormularioEntidadComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Input()
  errores: string[] = [];

  @Input() 
  modelo: EntidadDTO;

  @Output()
  OnSubmit: EventEmitter<EntidadCreacionDTO> = new EventEmitter<
    EntidadCreacionDTO
  >();

  @Input()
  empleadosNoSeleccionados: MultipleSelectorModel[];

  @Input()
  empleadosSeleccionados: MultipleSelectorModel[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      
      empleadosIds: ''
      
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios() {
    const empleadosIds = this.empleadosSeleccionados.map(val => val.llave);
    this.form.get('empleadosIds').setValue(empleadosIds);
    this.OnSubmit.emit(this.form.value);
  }

}
 