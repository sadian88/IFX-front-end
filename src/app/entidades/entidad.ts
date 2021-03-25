import { empleadoDTO } from '../empleados/empleado';


export interface EntidadCreacionDTO{
    Nombre: string;
    empleadosIds: number[];
}

export interface EntidadDTO{
    id: number;
    nombre: string;
    empleados: empleadoDTO[];
    
}

export interface EntidadPostGet {
    empleados: empleadoDTO[];
}


export interface EntidadPutGet {
    Entidad: EntidadDTO;
    empleadosSeleccionados: empleadoDTO[];
    empleadosNoSeleccionados: empleadoDTO[];
}