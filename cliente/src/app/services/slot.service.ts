import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Slot } from '../models/slotsModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlotService {
  API_URI = 'http://localhost:3000/slot';
	
	constructor(private http: HttpClient){}

	listarSlot(){
		//para expandir/especializar las variables usamos ` y no ' o "
		//Las variables salen pintadas de otro color diferente del de texto
		return this.http.get(`${this.API_URI}/lista`);
		//si no funciona usar 
		//return this.http.get(this.API_URI+'/list');
	}
	
	buscarSlot(id:string){
		return this.http.get(`${this.API_URI}/busca/${id}`);
	}
	guardarSlot(slot: Slot){
		return this.http.post(`${this.API_URI}/agrega`,slot);
	}
	
	eleminarSlot(id:string){
		return this.http.delete(`${this.API_URI}/elimina/${id}`);
	}
	
	modificarSlot(id:string, modificarSlot: Slot):Observable<Slot>{
		return this.http.put(`${this.API_URI}/modifica/${id}`,modificarSlot);
	}
}
