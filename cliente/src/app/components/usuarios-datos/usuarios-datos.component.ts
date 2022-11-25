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
  constructor( private router:Router,private usuariosService: UsuariosService, private animalService: AnimalService) { }

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

}