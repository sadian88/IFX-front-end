import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {MarkdownModule} from 'ngx-markdown'
import {LeafletModule} from '@asymmetrik/ngx-leaflet'
import "leaflet/dist/images/marker-shadow.png";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { SelectorMultipleComponent } from './utilidades/selector-multiple/selector-multiple.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { FormularioAutenticacionComponent } from './seguridad/formulario-autenticacion/formulario-autenticacion.component';
import { SeguridadInterceptorService } from './seguridad/seguridad-interceptor.service';
import { IndiceUsuariosComponent } from './seguridad/indice-usuarios/indice-usuarios.component';
import { IndiceEmpleadosComponent } from './empleados/indice-empleados/indice-empleados.component';
import { CrearEmpleadosComponent } from './empleados/crear-empleados/crear-empleados.component';
import { EditarEmpleadosComponent } from './empleados/editar-empleados/editar-empleados.component';
import { FormularioEmpleadoComponent } from './empleados/formulario-empleado/formulario-empleado.component';
import { CrearEntidadComponent } from './entidades/crear-entidad/crear-entidad.component';
import { DetalleEntidadComponent } from './entidades/detalle-entidad/detalle-entidad.component';
import { FormularioEntidadComponent } from './entidades/formulario-entidad/formulario-entidad.component';
import { ListadoEntidadComponent } from './entidades/listado-entidad/listado-entidad.component';
import { NoPermisosComponent } from './sinacceso/no-permisos/no-permisos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    InputImgComponent,
    InputMarkdownComponent,
    MapaComponent,
    SelectorMultipleComponent,
    MostrarErroresComponent,
    AutorizadoComponent,
    LoginComponent,
    RegistroComponent,
    FormularioAutenticacionComponent,
    IndiceUsuariosComponent,
    IndiceEmpleadosComponent,
    CrearEmpleadosComponent,
    EditarEmpleadosComponent,
    FormularioEmpleadoComponent,
    CrearEntidadComponent,
    DetalleEntidadComponent,
    FormularioEntidadComponent,
    ListadoEntidadComponent,
    NoPermisosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SeguridadInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
