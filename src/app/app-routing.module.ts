import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsAdminGuard } from './es-admin.guard';
import { IndiceEmpleadosComponent } from './empleados/indice-empleados/indice-empleados.component';
import { CrearEmpleadosComponent } from './empleados/crear-empleados/crear-empleados.component';
import { EditarEmpleadosComponent } from './empleados/editar-empleados/editar-empleados.component';
import { CrearEntidadComponent } from './entidades/crear-entidad/crear-entidad.component';
import { ListadoEntidadComponent } from './entidades/listado-entidad/listado-entidad.component';
import { DetalleEntidadComponent } from './entidades/detalle-entidad/detalle-entidad.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceUsuariosComponent } from './seguridad/indice-usuarios/indice-usuarios.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { NoPermisosComponent } from './sinacceso/no-permisos/no-permisos.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'sinprivilegios', component: NoPermisosComponent},
  {path: 'empleados', component: IndiceEmpleadosComponent, canActivate: [EsAdminGuard]},
  {path: 'empleados/crear', component: CrearEmpleadosComponent, canActivate: [EsAdminGuard]},
  {path: 'empleados/editar/:id', component: EditarEmpleadosComponent, canActivate: [EsAdminGuard]},
  {path: 'entidades/crear', component: CrearEntidadComponent, canActivate: [EsAdminGuard]}, 
  {path: 'entidades', component: ListadoEntidadComponent, canActivate: [EsAdminGuard] }, 
  {path: 'entidades/detalle/:id', component: DetalleEntidadComponent, canActivate: [EsAdminGuard]},      
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'usuarios', component: IndiceUsuariosComponent, canActivate: [EsAdminGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

