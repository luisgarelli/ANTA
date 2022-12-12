import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { AnimalesListarComponent } from '../animales-listar/animales-listar.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Adopcion } from 'src/app/models/adopcionModel';
import { UsuariosService } from '../../services/usuarios.service';
import { Animal } from 'src/app/models/animalModel';
import { ThisReceiver } from '@angular/compiler';
import { Adopciones } from 'src/app/models/adopcionesModel';
import { Provincias } from 'src/app/models/provinciaModel';
import { Localidades } from 'src/app/models/localidadModel';
import { from, Observable } from 'rxjs';
import { Subscriber } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Storage, ref, uploadBytes, listAll, getDownloadURL, UploadTaskSnapshot, uploadBytesResumable } from '@angular/fire/storage';


@Component({
  selector: 'app-animales-editar',
  templateUrl: './animales-editar.component.html',
  styleUrls: ['./animales-editar.component.css']
})

export class AnimalesEditarComponent implements OnInit {
  AnimalID: any = [];
  interesados: any = [];
  idUsuario: any;
  Animal: any = [];
  usuario2: Animal;
  imgUsuario: any;
  usuario1: Animal;
  usuario3: Animal;
  usuario4: Animal;
  usuario5: Animal;
  usuario6: Animal;
  provincias: any = [];
  localidades: any = [];
  provinciaUser: any;
  user: any;
  provincia: any;
  prov: any;
  localidad: any;
  combo3: any;
  combo4: any;
  localidadUser: any;
  codigo: any;

  constructor(private rutaActiva: ActivatedRoute, private router: Router, private storage: Storage, private animalService: AnimalService, private usuarioService: UsuariosService) {
    this.usuario2 = { imagen: "" };
    this.usuario1 = { nombre: "" };
    this.usuario3 = { tamanio: "" };
    this.usuario4 = { tipo: "" };
    this.usuario5 = { descripcion: "" };
    this.usuario6 = { provincia: "", localidad: "" };
  }

  ngOnInit(): void {
    this.animalService.listarProvincia().subscribe((data: any) => {
      this.combo3 = data;
    })

    this.animalService.listarLocalidad().subscribe((data: any) => {
      this.combo4 = data;
    })

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

        this.animalService.buscarProvincias(this.Animal.provincia).subscribe(

          res => {
            this.provincias = res;
            console.log(res);

          },
          err => console.log(err)
        )

        this.animalService.buscarlocal(this.Animal.localidad).subscribe(
          res => {
            this.localidades = res;
            console.log(res);
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    );
  }

  actualizar() {
    this.animalService.modificarAnimal(this.Animal.id, this.usuario1).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);

        this.ngOnInit();
      },
      err => console.log(err)
    );
  }

  actualizar2() {
    this.animalService.modificarAnimal(this.Animal.id, this.usuario3).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);

        this.ngOnInit();
      },
      err => console.log(err)
    );
  }

  actualizar3() {
    this.animalService.modificarAnimal(this.Animal.id, this.usuario4).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);

        this.ngOnInit();
      },
      err => console.log(err)
    );
  }

  actualizar4() {
    this.animalService.modificarAnimal(this.Animal.id, this.usuario5).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);
        
        this.ngOnInit();
      },
      err => console.log(err)
    );
  }

  cambiarSeleccion5(state: any) {
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
        this.codigo = res;
      },
      err => console.log(err)
    );
  }

  cambiarSeleccion6(e: any) {
    console.log(e.target.value);
    this.localidadUser = e.target.value;
    console.log(this.localidadUser);
  }

  cambiarProvincias() {
    this.usuario6.provincia = this.provinciaUser;
    this.usuario6.localidad = this.localidadUser;
    this.animalService.modificarAnimal(this.Animal.id, this.usuario6).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);

        this.ngOnInit();
      },
      err => console.log(err)
    );
  }

  cambiarImagen() {
    this.usuario2.imagen = this.imgUsuario;
    this.animalService.modificarAnimal(this.Animal.id, this.usuario2).subscribe(
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
    getDownloadURL(task.snapshot.ref).then((downLoadURL) =>
      this.imgUsuario = downLoadURL);
  }

  volver() {
    this.router.navigate(['animales/datos/'+this.AnimalID.id]);
  }
}
