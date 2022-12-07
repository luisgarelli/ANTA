import { Component, OnInit } from '@angular/core';
import { Raza } from 'src/app/models/razaModel';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animalModel';
import { Sexo } from 'src/app/models/sexoModel';
import { AnimalService } from '../../services/animal.service';
import { Provincias } from 'src/app/models/provinciaModel';

import { Localidades } from 'src/app/models/localidadModel';
import { from, Observable } from 'rxjs';
import { Subscriber } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Storage,ref, uploadBytes, listAll,getDownloadURL,UploadTaskSnapshot,uploadBytesResumable } from '@angular/fire/storage';
import { AnyForUntypedForms } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from 'src/app/models/usuarioModel';
import { Solicitud } from 'src/app/models/solicitudModel';
@Component({
  selector: 'app-usuarios-datos',
  templateUrl: './usuarios-datos.component.html',
  styleUrls: ['./usuarios-datos.component.css']
})
export class UsuariosDatosComponent implements OnInit {
user:any;
usuarios: any = [];
provincias:any =[];
  localidades:any =[];
  provincia:any;
  prov:any;
  localidad:any;
  solici:Solicitud;
  //
  token: any = "";
  tokenValidado: boolean = false;
  rol: any;
  roladmin: boolean = false;
  datosMenu=[{'titulo':'','url':''}];
  nombreUsuario :any;
  estadoPersona2="Rechazado";
    descripcion1="Su solicitud ha sido rechazada porque el usuario ha sido dado de baja.";
  constructor( private router:Router,private usuariosService: UsuariosService, private animalService: AnimalService) { 
    this.solici = {   estado: "" , descripcion:""};
  }

  ngOnInit(): void {
    this.user = this.usuariosService.getId();
    this.usuariosService.buscarUsuario(this.user).subscribe(
     
      res => {

        this.usuarios= res;
        console.log(this.usuarios.localidad);
        this.provincia = this.usuarios.provincia;
        this.localidad = this.usuarios.localidad;
        console.log(res);
        this.animalService.buscarProvincias(this.usuarios.provincia).subscribe(
     
          res => {
            this.provincias= res;
            console.log(res);
        
          },
          err => console.log(err)
        )
        this.animalService.buscarlocal(this.usuarios.localidad).subscribe(
     
          res => {
            this.localidades= res;
            console.log(res);
        
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    );
;
  }

  cambiarSeleccion(){
  
    this.router.navigate(['usuarios/perfil']);
}
eliminarUsuario(id:any){

  this.usuariosService.eliminarUser(id).subscribe(
     
    res => {
      console.log(res);
      this.ngOnInit();
    },
    err => console.log(err)
  )
  this.usuariosService.eliminarAdopcion(id).subscribe(
     
    res => {
      
      console.log(res);
      this.ngOnInit();
  
    },
    err => console.log(err)
  )
  this.usuariosService.eliminarAdopciones(id).subscribe(
     
    res => {
    
      console.log(res);
      this.ngOnInit();
    },
    err => console.log(err)
  )
//

this.solici.estado = this.estadoPersona2;
this.solici.descripcion = this.descripcion1;
 
this.animalService.updateSolici(id,this.solici).subscribe(
  res => {
    console.log("Datos del Servicio");
    console.log(res);
  
     
    this.ngOnInit();
  },
  err => console.log(err)
);
//
  this.usuariosService.eliminarAnimales(id).subscribe(
     
    res => {
     
      console.log(res);
      this.ngOnInit();
    },
    err => console.log(err)
  )
  this.usuariosService.eliminarSolicitud(id).subscribe(
     
    res => {
     
      console.log(res);
      this.ngOnInit();
    },
    err => console.log(err)
  )
  this.usuariosService.logOut();
  this.tokenValidado = false;
  this.token="";
  this.nombreUsuario = "";
  console.log("Cerrando sesion!!!");
  this.router.navigate(['usuarios/principal']);
}


}
