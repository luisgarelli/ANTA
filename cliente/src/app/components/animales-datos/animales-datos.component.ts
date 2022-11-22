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

import { Provincias } from 'src/app/models/provinciaModel';
import  Swal  from 'sweetalert2';
import { Localidades } from 'src/app/models/localidadModel';
import { from, Observable } from 'rxjs';
import { Subscriber } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Storage,ref, uploadBytes, listAll,getDownloadURL,UploadTaskSnapshot,uploadBytesResumable } from '@angular/fire/storage';



@Component({
  selector: 'app-animales-datos',
  templateUrl: './animales-datos.component.html',
  styleUrls: ['./animales-datos.component.css']
})
export class AnimalesDatosComponent implements OnInit {
  AnimalID: any = [];
  interesados:any=[];
  idUsuario:any;
  Animal :any = [];
  usuario2: Animal;
  imgUsuario:any;
  constructor( private rutaActiva: ActivatedRoute,private router:Router, private storage : Storage, private animalService: AnimalService,  private usuarioService: UsuariosService) { 
    this.usuario2 = { imagen: "" };
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(routeParams => {
      this.AnimalID = this.rutaActiva.snapshot.params
      
      console.log("Animal", this.AnimalID);
     
     
      });
      this.animalCargarDatos();
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
  cambiarImagen(){
    this.usuario2.imagen = this.imgUsuario;
    this.animalService.modificarAnimal(this.Animal.id,this.usuario2).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);
          this.ngOnInit();
      },
      err => console.log(err)
    );
  }
  selecciona($event: any) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `images/${file.name}`);
  
    uploadBytes(imgRef, file).then(x => {
     // this.getImages();
    
    }).catch(error => console.log(error));
    const task = uploadBytesResumable(imgRef, file);
    getDownloadURL(task.snapshot.ref).then((downLoadURL)=>
    this.imgUsuario = downLoadURL);
    
  }
  editar(id:any){
    console.log(id);
    this.router.navigate(['animales/editar',id]);
}
}
