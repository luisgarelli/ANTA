import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historial } from '../models/historialModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
	API_URI = 'http://localhost:3000/historial';
	
	constructor(private http: HttpClient){}

	listarHistoria(){
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		return this.http.get(`${this.API_URI}/listar`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
	}

	listarTabla(){
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		return this.http.get(`${this.API_URI}/listar-historial`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
	}
	
	buscarHistoria(id:string){
		return this.http.get(`${this.API_URI}/buscar/${id}`);
	}
	guardarHistoria(historia: Historial){
		return this.http.post(`${this.API_URI}/agregar`,historia);
	}
	
	eleminarHistoria(id:string){
		return this.http.delete(`${this.API_URI}/eliminar/${id}`);
	}
	
	modificarHistoria(id:string, modificarHistoria: Historial):Observable<Historial>{
		return this.http.put(`${this.API_URI}/modificar/${id}`,modificarHistoria);
	}
}
