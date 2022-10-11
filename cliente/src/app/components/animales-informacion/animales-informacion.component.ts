import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { AnimalesListarComponent } from '../animales-listar/animales-listar.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Adopcion } from 'src/app/models/adopcionModel';
import { UsuariosService } from '../../services/usuarios.service';
import { NgxToastService } from 'ngx-toast-notifier';
@Component({
  selector: 'app-animales-informacion',
  templateUrl: './animales-informacion.component.html',
  styleUrls: ['./animales-informacion.component.css']

})
export class AnimalesInformacionComponent implements OnInit {
variable :any;
AnimalID: any = [];
Animal :any = [];
id = "";
nombreUsuario:any;
adopcion: Adopcion;
constructor( private ngxToastService: NgxToastService, private rutaActiva: ActivatedRoute, private animalService: AnimalService,  private usuarioService: UsuariosService) { 
  this.adopcion = {  id_animal: "",  id_usuario: ""  };
}
 


  ngOnInit(): void {
    this.rutaActiva.params.subscribe(routeParams => {
      this.AnimalID = this.rutaActiva.snapshot.params
      
      console.log("Animal", this.AnimalID);
     
      });
      this.animalCargarDatos();
      /*this.animal.buscarAnimal(this.AnimalID.id).subscribe(
        res => {
          console.log("Datos del Servicio");
         // console.log("respuesta :",res);
        this.Animal=res;
  
        },
        err => console.log(err)
      );*/
    
  }
  ngOnDestroy(): void {
    this.AnimalID = [];
    this.Animal = [];
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
  agregar(animal:any){

    this.adopcion.id_animal = animal;
    this.nombreUsuario = this.usuarioService.getNombre();
  this.adopcion.id_usuario = this.nombreUsuario;
    this.animalService.guardarAdopcion(this.adopcion).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);
       
     
         
        this.ngOnInit();
      },
      err => console.log(err)
    );
  }
  addSuccess():void{
    this.ngxToastService.onSuccess('Se ha registrado la Adopción','This is a success alert')
  }

  addInfo():void{
    this.ngxToastService.onInfo('This is a info alert','This is a info alert')
  }

  addWarning():void{
    this.ngxToastService.onWarning('This is a warning alert','This is a warning alert')
  }

  addDanger():void{
    this.ngxToastService.onDanger('This is a danger alert','This is a danger alert')
  }
  /*cambiar(){
    this.animal.elegido;
    console.log(this.animal.elegido);
    //this.localidades = this.usuariosService.listarLocalidad();
   // console.log(this.localidades);
   // this.localidades = this.usuariosService.listarLocalidad().filter(e=> e.codigo == state );
   // console.log(this.localidades);
 //this.provinciaUser = this.loc;
    
    //console.log(this.combo4);
    //console.log("Modifica =>" + this.localidad);

      
    this.animalService.buscarAnimal(this.animal.elegido).subscribe(
      res => {
        console.log("Datos del Servicio");
       // console.log("respuesta :",res);
      this.variable=res;

      },
      err => console.log(err)
    );
//
  }*/
}

