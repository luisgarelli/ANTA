import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from 'src/app/models/usuarioModel';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class UsuariosService {
	API_URI = 'http://localhost:3000/user';

	constructor(private http: HttpClient) { }

	listarUsuarios() {
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		return this.http.get(`${this.API_URI}/list`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
	}
	listarSexo() {
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		return this.http.get(`${this.API_URI}/listar`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
	}
	listarProvincia() {
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		return this.http.get(`${this.API_URI}/listaProvincia`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
	}
	listarLocalidad() {
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		return this.http.get(`${this.API_URI}/listaLocalidad`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
	}

	buscarUsuario(id: string) {
		return this.http.get(`${this.API_URI}/find/${id}`);
	}
	buscarLocalidad(id: string) {
		return this.http.get(`${this.API_URI}/busca/${id}`);
	}
	guardarUsuario(usuario: Usuarios) {
		return this.http.post(`${this.API_URI}/create`, usuario);
	}

	eleminarUsuario(id: string) {
		return this.http.delete(`${this.API_URI}/delete/${id}`);
	}

	//
	eliminarUser(id: string) {
		return this.http.delete(`${this.API_URI}/elimina/${id}`);
	}
	eliminarSolicitud(id: string) {
		return this.http.delete(`${this.API_URI}/solicitud/${id}`);
	}
	eliminarSolicitudes(id: string) {
		return this.http.delete(`${this.API_URI}/solicitudes/${id}`);
	}
	eliminarAdopcion(id: string) {
		return this.http.delete(`${this.API_URI}/adopcion/${id}`);
	}
	eliminarAdopciones(id: string) {
		return this.http.delete(`${this.API_URI}/adopciones/${id}`);
	}
	eliminarAnimales(id: string) {
		return this.http.delete(`${this.API_URI}/animales/${id}`);
	}
	//

	actualizarUsuario(id: string, actualizaUsuario: Usuarios): Observable<Usuarios> {
		return this.http.put(`${this.API_URI}/update/${id}`, actualizaUsuario);
	}
	ingresar(usuario: any) {
		return this.http.post(`${this.API_URI}/signin`, usuario);
	}

	registrar(usuario: any) {
		return this.http.post(`${this.API_URI}/signup`, usuario);
	}

	isLoggedIn(): Boolean {
		return !!localStorage.getItem('token'); //Si existe token retorna true
		//es el equivalente de testearlo con if pero ahora en una sola linea.
	}

	//borra datos local storage
	logOut() {
		localStorage.removeItem('token');
		localStorage.removeItem('rol');
		localStorage.removeItem('id');
		localStorage.removeItem('nombre');
	}

	setToken(token: string) {
		localStorage.setItem('token', token)
	}
	
	//Obtenemos el token que despues enviara el interceptor x cada req
	getToken() {
		return localStorage.getItem('token');
	}

	setRol(rol: string) {
		localStorage.setItem('rol', rol)
	}
	
	getRol() {
		return localStorage.getItem('rol');
	}
	setNombre(nombre: string) {
		localStorage.setItem('nombre', nombre)
	}
	
	getNombre() {
		return localStorage.getItem('nombre');
	}
	setId(id: string) {
		localStorage.setItem('id', id)
	}
	
	getId() {
		return localStorage.getItem('id');
	}


}