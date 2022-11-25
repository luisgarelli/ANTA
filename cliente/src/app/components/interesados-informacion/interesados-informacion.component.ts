import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { AnimalesListarComponent } from '../animales-listar/animales-listar.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Adopcion } from 'src/app/models/adopcionModel';
import { UsuariosService } from '../../services/usuarios.service';
import { NgxToastService } from 'ngx-toast-notifier';
import { Animal } from 'src/app/models/animalModel';
import { ThisReceiver } from '@angular/compiler';
import { Adopciones } from 'src/app/models/adopcionesModel';

import { Console } from 'console';
@Component({
  selector: 'app-interesados-informacion',
  templateUrl: './interesados-informacion.component.html',
  styleUrls: ['./interesados-informacion.component.css']
})
export class InteresadosInformacionComponent implements OnInit {
  AnimalID: any = [];
  interesados:any=[];
  idUsuario:any;
  Animal :any = [];
  adopcion: Adopciones;
  verificarUsuario:any;
  animal2: Animal;
  estadoAnimal ="Adoptado";
    Solicitudes :any = [];
    adop: Adopcion;
    estadoPersona="Aceptado";
    estadoPersona2="Rechazado";
    descripcion1="Su solicitud ha sido rechazada por no cumplir con los requisitos minimos para la adopción de este animal.";
    descripcion2="Su solicitud  ha sido  aceptada comuniquese con el Dador.";
  constructor( private ngxToastService: NgxToastService, private rutaActiva: ActivatedRoute, private animalService: AnimalService,  private usuarioService: UsuariosService) {
    this.adopcion = {   id_animal: "" , id_usuario:"" };
    this.animal2 = { estado: "" };
    this.adop = { estado: "",descripcion:"" };
   }

  ngOnInit(): void {
    this.idUsuario = this.usuarioService.getId();
    this.rutaActiva.params.subscribe(routeParams => {
      this.AnimalID = this.rutaActiva.snapshot.params
      
      console.log("Animal", this.AnimalID);
     
     
      });
      this.animalCargarDatos();
      this.animalService.buscarUsuario(this.idUsuario).subscribe(
        res => {
          this.verificarUsuario = res
          console.log("verificar usuario",this.verificarUsuario);
          
        },
        err => console.log(err)
      );
      this.animalService.buscAnimalAdopcion(this.AnimalID.id).subscribe(
        res => {
          this.interesados = res
          console.log("verificar interesados",this.interesados);
         
   
        },
        err => console.log(err)
      );
  }
  animalCargarDatos() {

    this.animalService.buscarAnimal(this.AnimalID.id).subscribe(
      res => {
        this.Animal = res
        console.log(this.Animal);

        
      },
      err => console.log(err)
    );
   
  }
  eliminarInteresados(id:any,animal:any) {
    console.log("interesado borrado correctamente");
    this.adop.estado = this.estadoPersona2;
    this.adop.descripcion = this.descripcion1;
      this.animalService.modSolicitudes(animal,id,this.adop).subscribe(
        res => {
          console.log("Datos del Servicio");
          console.log(res);
    
        },
        err => console.log(err)
      );
    this.animalService.eliminarInteresado(id).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);
      

        this.ngOnInit();
      },
      err => console.log(err)
    )
  }


  agregar(id:any,animal:any) {
    console.log(id);

    
    console.log(animal);

    this.adopcion.id_usuario = id;
    this.adopcion.id_animal = animal;
    this.animalService.buscaradopciones(animal,id).subscribe(
      res => {
        console.log("Datos de adopciones");
        console.log(res);
        this.Solicitudes = res;
        console.log("estado",this.Solicitudes.estado);
      },
      err => console.log(err)
    );
      // empiza modificar estado
      this.adop.estado = this.estadoPersona;
      this.adop.descripcion = this.descripcion2;
      this.animalService.modSolicitudes(animal,id,this.adop).subscribe(
        res => {
          console.log("Datos del Servicio");
          console.log(res);
    
        },
        err => console.log(err)
      );
      //
    this.animal2.estado = this.estadoAnimal;
    this.animalService.modificarAnimal(animal,this.animal2).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);
  
      },
      err => console.log(err)
    );
    this.animalService.guardarAdopciones(this.adopcion).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);
      
         
        this.ngOnInit();
      },
      err => console.log(err)
    );
  }
}

