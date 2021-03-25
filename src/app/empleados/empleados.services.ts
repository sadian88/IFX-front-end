import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { empleadoCreacionDTO, empleadoDTO } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'empleados';

  
  public obtenerTodos(){
    return this.http.get<empleadoDTO[]>(`${this.apiURL}/todos`);
  }

  public obtenerPorId(id: number): Observable<empleadoDTO>{
    return this.http.get<empleadoDTO>(`${this.apiURL}/${id}`);
  }

  public crear(empleado: empleadoCreacionDTO) {
    return this.http.post(this.apiURL, empleado);
  }

  public editar(id: number, empleado: empleadoCreacionDTO){
    console.log(empleado);
    return this.http.put(`${this.apiURL}/${id}`, empleado);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
 