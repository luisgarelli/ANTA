import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Auto } from '../models/autosModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutosService {
	API_URI = 'http://localhost:3000/autos';
	
	constructor(private http: HttpClient){}

	listarAuto(){
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		return this.http.get(`${this.API_URI}/listar`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
	}
	
	buscarAuto(id:string){
		return this.http.get(`${this.API_URI}/buscar/${id}`);
	}
	guardarAuto(auto: Auto){
		return this.http.post(`${this.API_URI}/agregar`,auto);
	}
	
	eleminarAuto(id:string){
		return this.http.delete(`${this.API_URI}/eliminar/${id}`);
	}
	
	modificarAuto(id:string, modificarAuto: Auto):Observable<Auto>{
		return this.http.put(`${this.API_URI}/modificar/${id}`,modificarAuto);
	}
}
