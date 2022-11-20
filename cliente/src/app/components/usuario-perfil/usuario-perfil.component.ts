import { Component, OnInit } from '@angular/core';
import { Raza } from 'src/app/models/razaModel';
import { Animal } from 'src/app/models/animalModel';
import { Sexo } from 'src/app/models/sexoModel';
import { AnimalService } from '../../services/animal.service';
import { Provincias } from 'src/app/models/provinciaModel';
import  Swal  from 'sweetalert2';
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
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit {
  usuarios: any = [];
  provincias:any =[];
  localidades:any =[];
  provinciaUser:any;
  user:any;
  provincia:any;
  prov:any;
  localidad:any;
  mostrar:boolean = false;
  mostrar2:boolean = false;
  mostrar3:boolean = false;
  mostrar4:boolean = false;
  mostrar5:boolean = false;
  usuario: Usuarios;
  usuario2: Usuarios;
  usuario3: Usuarios;
  usuario4: Usuarios;
  usuario5: Usuarios;
  combo3:any;
  combo4:any;
  localidadUser:any;
  codigo: any;
  constructor(private usuariosService: UsuariosService, private animalService: AnimalService) { 

    this.usuario = { nombre: "" };
    this.usuario2 = { sexo: "" };
    this.usuario3 = { email: "" };
    this.usuario4 = { provincia: "" ,localidad: "" };
    this.usuario5 = { numero: "" };
  }

  ngOnInit(): void {
    this.user = this.usuariosService.getId();

    this.animalService.listarProvincia().subscribe((data:any)=>{
      this.combo3= data;
      })
      this.animalService.listarLocalidad().subscribe((data:any)=>{
        this.combo4= data;
        })

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
mostrarse(){
this.mostrar = true;
}
mostrarse2(){
  this.mostrar2 = true;
  }
  mostrarse3(){
    this.mostrar3 = true;
    }
    mostrarse4(){
      this.mostrar4 = true;
      }
      mostrarse5(){
        this.mostrar5 = true;
        }
cambiarNombre2(){
  this.animalService.modificarUsuario(this.user,this.usuario).subscribe(
    res => {
      console.log("Datos del Servicio");
      console.log(res);
        this.ngOnInit();
    },
    err => console.log(err)
  );
  }
  ocultar(){
    this.mostrar = false; 
    this.ngOnInit();
  }
  ocultar2(){
    this.mostrar2 = false; 
    this.ngOnInit();
  }
  ocultar3(){
    this.mostrar3 = false;
    this.ngOnInit(); 
  }
  ocultar4(){
    this.mostrar4 = false;
    this.ngOnInit();
  }
  ocultar5(){
    this.mostrar5 = false; 
    this.ngOnInit();
  }
  cambiarSexo(){
    this.animalService.modificarUsuario(this.user,this.usuario2).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);
          this.ngOnInit();
      },
      err => console.log(err)
    );
  }
  cambiarEmail(){
    this.animalService.modificarUsuario(this.user,this.usuario3).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);
          this.ngOnInit();
      },
      err => console.log(err)
    );
  }
  
  cambiarSeleccion5(state:any){
      
    this.provinciaUser = state.target.value;
    console.log(this.provinciaUser);
    //this.localidades = this.usuariosService.listarLocalidad();
   // console.log(this.localidades);
   // this.localidades = this.usuariosService.listarLocalidad().filter(e=> e.codigo == state );
   // console.log(this.localidades);
 //this.provinciaUser = this.loc;
    /*
     this.animal.provincia = this.provinciaUser;
  this.animal.imagen = this.imgUsuario;
   this.animal.localidad = this.localidadUser;
    */
    //console.log(this.combo4);
    //console.log("Modifica =>" + this.localidad);

      
    this.animalService.buscarLocalidad(this.provinciaUser).subscribe(
      res => {
        console.log("Datos del Servicio");
       // console.log("respuesta :",res);
      this.codigo=res;

      },
      err => console.log(err)
    );
//
    }
    cambiarSeleccion6(e:any){
    
      console.log(e.target.value);
      this.localidadUser = e.target.value;
      
      console.log(this.localidadUser);
      }
      cambiarProvincias(){
        this.usuario4.provincia = this.provinciaUser;
       
         this.usuario4.localidad = this.localidadUser;
        this.animalService.modificarUsuario(this.user,this.usuario4).subscribe(
          res => {
            console.log("Datos del Servicio");
            console.log(res);
              this.ngOnInit();
          },
          err => console.log(err)
        );
      }
      cambiarNumero(){
        this.animalService.modificarUsuario(this.user,this.usuario5).subscribe(
          res => {
            console.log("Datos del Servicio");
            console.log(res);
              this.ngOnInit();
          },
          err => console.log(err)
        );
        }
}
