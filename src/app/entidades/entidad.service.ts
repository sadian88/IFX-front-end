import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntidadCreacionDTO, EntidadDTO, EntidadPostGet, EntidadPutGet } from './entidad';

@Injectable({
  providedIn: 'root'
})
export class EntidadesService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'entidades';

  public obtenerTodos(){
    return this.http.get<EntidadDTO[]>(`${this.apiURL}/todos`);
  }
  public obtenerPorId(id: number): Observable<EntidadDTO>{
    return this.http.get<EntidadDTO>(`${this.apiURL}/${id}`);
  }

  public postGet(): Observable<EntidadPostGet>{
    return this.http.get<EntidadPostGet>(`${this.apiURL}/postget`);
  }

  public putGet(id: number): Observable<EntidadPutGet>{
    return this.http.get<EntidadPutGet>(`${this.apiURL}/putget/${id}`);
  }

  public crear(entidad: EntidadCreacionDTO): Observable<number>{
    
    const formData = this.ConstruirFormData(entidad);
    console.log(formData);
    return this.http.post<number>(this.apiURL, formData);
  }

  public editar(id: number, entidad: EntidadCreacionDTO){
    const formData = this.ConstruirFormData(entidad);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  private ConstruirFormData(entidad: EntidadCreacionDTO): FormData {
    const formData =  new FormData();

    formData.append('Nombre', entidad.Nombre);
       
    formData.append('empleadosIds', JSON.stringify(entidad.empleadosIds));
    
    return formData;
  }
}
