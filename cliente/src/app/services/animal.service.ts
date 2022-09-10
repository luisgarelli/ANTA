import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Animal } from '../models/animalModel';
import { Observable } from 'rxjs';
import { Sexo } from '../models/sexoModel';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  API_URI = 'http://localhost:3000/animal';
	
	constructor(private http: HttpClient){}

	listarAnimal(){
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		return this.http.get(`${this.API_URI}/listar`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
	}
	listaSexo(){
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		return this.http.get(`${this.API_URI}/listarSexo`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
	}
	listaRaza(){
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		return this.http.get(`${this.API_URI}/listaRaza`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
	}
	buscarLocalidad(id: string) {
		return this.http.get(`${this.API_URI}/buscaLocal/${id}`);
	}
	buscaRaza(id: string) {
		return this.http.get(`${this.API_URI}/buscaRaza/${id}`);
	}
	listAnimales(){
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		return this.http.get(`${this.API_URI}/listaAnimales`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
	}
	
	buscarAnimal(id:string){
		return this.http.get(`${this.API_URI}/buscar/${id}`);
	}
	guardarAnimal(auto: Animal){
		return this.http.post(`${this.API_URI}/agregar`,auto);
	}
	
	eleminarAnimal(id:string){
		return this.http.delete(`${this.API_URI}/eliminar/${id}`);
	}
	
	modificarAnimal(id:string, modificarAnimal: Animal):Observable<Animal>{
		return this.http.put(`${this.API_URI}/modificar/${id}`,modificarAnimal);
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
}
