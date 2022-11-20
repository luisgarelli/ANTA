import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutosAdministrarComponent } from './components/autos-administrar/autos-administrar.component';
import { UsuariosIngresarComponent } from "./components/usuarios-ingresar/usuarios-ingresar.component"
import { UsuariosRegistrarComponent } from "./components/usuarios-registrar/usuarios-registrar.component"
import { UsuariosPrincipalComponent } from './components/usuarios-principal/usuarios-principal.component';
import { UsuariosHomeComponent } from './components/usuarios-home/usuarios-home.component';
import { AuthGuard } from './auth.guard';
import { SlotAdministrarComponent } from './components/slot-administrar/slot-administrar.component';
import { AutosListarComponent } from './components/autos-listar/autos-listar.component';
import { AutosHistorialComponent } from './components/autos-historial/autos-historial.component';
import { AnimalAdministrarComponent } from './components/animal-administrar/animal-administrar.component';
import { UsuariosListarComponent } from './components/usuarios-listar/usuarios-listar.component';
import { AnimalesListarComponent } from './components/animales-listar/animales-listar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AnimalesRegistrarComponent } from './components/animales-registrar/animales-registrar.component';
import { AnimalesInformacionComponent } from './components/animales-informacion/animales-informacion.component';
import { AnimalesRegistradosComponent } from './components/animales-registrados/animales-registrados.component';
import { InteresadosInformacionComponent } from './components/interesados-informacion/interesados-informacion.component';
import { AnimalesAdoptadosComponent } from './components/animales-adoptados/animales-adoptados.component';
import { UsuariosSolicitudesComponent } from './components/usuarios-solicitudes/usuarios-solicitudes.component';
import { UsuarioPerfilComponent } from './components/usuario-perfil/usuario-perfil.component';
const routes: Routes = [
	{
		path: '',
		redirectTo: 'usuarios/principal',
		pathMatch: 'full'
	},
	{
		path: 'usuarios/ingresar',
		component: UsuariosIngresarComponent
	},
	{
		path: 'usuarios/registrar',
		component: UsuariosRegistrarComponent
	},
	{
		path: 'usuarios/principal',
		component: UsuariosPrincipalComponent
	},
	{
		path: 'usuarios/home',
		component: UsuariosHomeComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'autos/administrar',
		component: AutosAdministrarComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'autos/listar',
		component: AutosListarComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'slots/administrar',
		component: SlotAdministrarComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'historial/listar',
		component: AutosHistorialComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'animal/administrar',
		component: AnimalAdministrarComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'usuarios/listar',
		component: UsuariosListarComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'animales/listar',
		component: AnimalesListarComponent,
		canActivate: [AuthGuard]
	},
	
	{
		path: 'usuarios/solicitudes',
		component: UsuariosSolicitudesComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'usuario/registrar',
		component: RegistrarComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'animales/adoptados',
		component: AnimalesAdoptadosComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'animales/registrados',
		component: AnimalesRegistradosComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'animales/registrar',
		component: AnimalesRegistrarComponent,
		canActivate: [AuthGuard]
	},
	
	{
		path:'animales/informacion/:id',component : AnimalesInformacionComponent
	},
	{
		path:'interesados/informacion/:id',component : InteresadosInformacionComponent
	
	},
	{
		path: 'usuarios/perfil',
		component: UsuarioPerfilComponent,
		canActivate: [AuthGuard]
	}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
