import { Component, OnInit } from '@angular/core';
import { Raza } from 'src/app/models/razaModel';
import { Animal } from 'src/app/models/animalModel';
import { Sexo } from 'src/app/models/sexoModel';
import { AnimalService } from '../../services/animal.service';
import { Provincias } from 'src/app/models/provinciaModel';
import Swal from 'sweetalert2';
import { Localidades } from 'src/app/models/localidadModel';
import { from, Observable } from 'rxjs';
import { Subscriber } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Storage, ref, uploadBytes, listAll, getDownloadURL, UploadTaskSnapshot, uploadBytesResumable } from '@angular/fire/storage';
import { AnyForUntypedForms } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-animales-registrar',
  templateUrl: './animales-registrar.component.html',
  styleUrls: ['./animales-registrar.component.css']
})
export class AnimalesRegistrarComponent implements OnInit {
  myimagess!: Observable<any>;
  myimage!: Observable<any>;
  encuentro: any;
  base64: any;
  base64code!: any
  element: any;
  animal = { nombre: "", sexo: "", raza: "", descripcion: "", provincia: "", localidad: "", animal_codigo: "", imagen: "", estado: "", tamanio: "", tipo: "", id_usuario: "" };
  sexo: Sexo;
  raza: Raza;
  id: string = "";
  animal2: Animal;//Usado para instancial el auto a modificar
  animales: any = [];
  combo: any;
  sexoAnimal: any;
  combo2: any;
  razaAnimal: any;
  combo3: any;
  combo4: any;
  combo5: any;
  provinciaUser: any;
  localidadUser: any;
  codigo: any;
  codigo2: any;
  tipoAnimal: any;
  images: string[] = [];
  croppedImage: any = '';
  //
  usu: any;
  usuarios: string[] = [];
  //
  modificarMayuscula: any;
  patenteMayuscula: any;
  descripcionCaracter: any;
  imagen: any;
  imagen2: any;
  estadoAnimal = "Disponible";
  //--
  localidades: any = [];
  fecha: any;
  algo: any;
  imgUsuario: any;
  //--
  //--
  imagePath: any;
  img: any;
  idUsuario: any;
  errorNombre = 0;
  errorAnimal = 0;
  errorProvincia = 0;
  errorLocalidad = 0;
  errorTamanio = 0;
  //--
  constructor(private router: Router, private animalService: AnimalService, private _sanitizer: DomSanitizer, private storage: Storage, private usuarioService: UsuariosService) {
    this.animal = { nombre: "", sexo: "", raza: "", descripcion: "", provincia: "", localidad: "", animal_codigo: "", imagen: "", estado: "", tamanio: "", tipo: "", id_usuario: "" };
    this.animal2 = { nombre: "", sexo: "", raza: "", descripcion: "", alta: "" };
    this.sexo = { id: "", sexo: "" };
    this.raza = { id: "", raza: "" };
    /*
    replace(/\/+/g,'-')
       this.sinCaracter= this.auto.descripcion?.replace(/[\/\\]+/g,'-');;
    this.auto.descripcion = this.sinCaracter;
    */
  }

  ngOnInit(): void {
    //this.imageSource = this._sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image}`);
    this.getImages();
    this.idUsuario = this.usuarioService.getId();
    this.animalService.listarAnimal().subscribe(

      res => {
        console.log("Datos del Servicio");
        //this.mostrar();
        //empieza


        //termina

        console.log(res);
        this.animales = res;


      },
      err => console.log(err)
    )
    //---------------------------------------------
    this.animalService.listaSexo().subscribe((data: any) => {
      this.combo = data;
    })
    this.animalService.listaRaza().subscribe((data: any) => {
      this.combo2 = data;
    })


    this.animalService.listarProvincia().subscribe((data: any) => {
      this.combo3 = data;
    })

    this.animalService.listAnimales().subscribe((data: any) => {
      this.combo5 = data;
    })
    this.animalService.listarLocalidad().subscribe((data: any) => {
      this.combo4 = data;
    })

    this.animalService.listarLocalidad().subscribe(

      res => {
        console.log("Datos del Servicio");
        //this.mostrar();
        //empieza


        //termina

        //console.log(res);
        this.localidades = res
      },
      err => console.log(err)
    )

  }
  /* mostrar(){
     
     for (let i = 0 ; i< this.autos.length; i++){
     
  let multis= this.autos[i].descripcion;
 //
    this.sinCaracter= multis.replace(/[\/\\]+/g,'');
     multis = this.sinCaracter;
     console.log(multis);
     this.auto.descripcion =  multis;
      /* let multis = this.articulos[i].precio;
        
      this.multiplicacion = parseFloat(total) * parseFloat(multis);
    
    this.resultado=this.multiplicacion;
 
    suma = suma + (this.multiplicacion);
    this.total=suma;
     
       }
 
   }
 */

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
  dataURLtoFile(dataurl: any, filename: any) {

    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  getImages() {
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef).then(async images => {
      this.images = [];
      for (let image of images.items) {
        this.algo = await getDownloadURL(image);
        console.log("este es ", this.algo);
        this.images.push(this.algo);

      }

    }).catch(error => console.log(error));
  }
  getUsuarios() {

  }
  alerta() {
    Swal.fire("Completado", '¡Se ha registrado!', 'success');


  }
  cambiarSeleccion(e: any) {
    console.log(e.target.value);
    this.sexoAnimal = e.target.value;
    console.log(this.sexoAnimal);
  }
  cambiarSeleccion2(e: any) {
    // console.log(e.target.value);
    this.razaAnimal = e.target.value;
    console.log(this.razaAnimal);



  }
  valor(e: any) {
    // console.log(e.target.value);

    console.log("valor", e.target.value);
    this.usu = e.target.value;


  }
  cambiarSeleccion5(state: any) {

    this.provinciaUser = state.target.value;
    console.log(this.provinciaUser);
    //this.localidades = this.usuariosService.listarLocalidad();
    // console.log(this.localidades);
    // this.localidades = this.usuariosService.listarLocalidad().filter(e=> e.codigo == state );
    // console.log(this.localidades);
    //this.provinciaUser = this.loc;

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
    //
  }
  cambiarSeleccion6(e: any) {

    console.log(e.target.value);
    this.localidadUser = e.target.value;

    console.log(this.localidadUser);
  }
  cambiarSeleccion7(e: any) {

    console.log(e.target.value);
    this.tipoAnimal = e.target.value;

    console.log(this.tipoAnimal);

    this.animalService.buscaRaza(this.tipoAnimal).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log("respuesta :", res);
        this.codigo2 = res;

      },
      err => console.log(err)
    );
  }
  fechaSeleccionada(e: any) {

    console.log(e.target.value);
    this.fecha = e.target.value;


  }
  imagenSeleccionada(e: any) {

    console.log(e.target.files);
    // this.imagen = e.target.vaue;
    var binaryString = e.target.result;
    this.imagen = btoa(binaryString);
    console.log(btoa(binaryString));


    /*
    atob()
      var files = event.target.files;
         var file = files[0];
   
       if (files && file) {
           var reader = new FileReader();
   
           reader.onload =this.handleFile.bind(this);
   
           reader.readAsBinaryString(file);
       }
    */
  }
  agregar() {

    this.animal.sexo = this.sexoAnimal;
    this.animal.animal_codigo = this.tipoAnimal;
    this.animal.raza = this.razaAnimal;
    //  this.animal.alta = this.fecha;
    this.animal.provincia = this.provinciaUser;
    this.animal.imagen = this.imgUsuario;
    this.animal.localidad = this.localidadUser;
    this.animal.estado = this.estadoAnimal;
    this.animal.id_usuario = this.idUsuario;
    //this.imagenes(this.animal.imagen);
    //this.transform(this.animal.imagen);
    this.animalService.guardarAnimal(this.animal).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);
        this.router.navigate(['animales/registrados']);
        /*  for (let ani of this.animales){
            // this.sanitizer.bypassSecurityTrustResourceUrl(ani.imagen);
            //this.dataURLtoFile(this.croppedImage,'image.png');
                   this.algo  = this.dataURLtoFile(ani.imagen,'image.png')
                   ani.imagen = this.algo;
                   //console.log(ani.imagen);
           } */

        //



        /*this.sinCaracter= this.auto.descripcion?.replace(/[\/\\]+/g,'?');
        this.auto.descripcion = this.sinCaracter;*/
        //this.autos = res

        /*
          Para ver el listado actualizado debemos recargar al componente. Lo vamos
          a lograr invocando al metodo ngOnInit.
        */

        this.ngOnInit();
      },
      err => console.log(err)
    );


  }
  transform(imagen: any) {
    this.img = this._sanitizer.bypassSecurityTrustResourceUrl(imagen);
  }



  seleccionar() {
    console.log(this.id);
    //let econtrado = this.autos.find((obj:Auto) => {
    console.log("hola " + this.animal2);
    this.animal2 = this.animales.find((obj: Animal) => {
      console.log(obj);
      return obj.id == this.id;
    });
    console.log("Modifica =>" + this.animal2);
  }
  BorrarAnimal(id: string) {
    if (id != "") {
      console.log("Auto borrado correctamente");
      this.animalService.eleminarAnimal(id).subscribe(
        res => {
          console.log("Datos del Servicio");
          console.log(res);
          this.animales = res

          this.ngOnInit();
        },
        err => console.log(err)
      )
    }
  }

  imagenes(imagen: any) {
    console.log("imageness", imagen);
    this.croppedImage = imagen;
    var file = this.dataURLtoFile(this.croppedImage, 'image.png');
    console.log(file);

  }
  modificar() {
    console.log("Modifica =>" + this.animal2);
    this.animalService.modificarAnimal(this.id, this.animal2).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);

      },
      err => console.log(err)
    );
  }
  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    this.convertToBase64(file);
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
      + this.base64code);


  };

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
      console.log(d)
      this.myimage = d
      this.base64code = d

    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
  // otra prueba

  verificarForm(): boolean {
    this.errorNombre = this.verificarNombre(this.animal.nombre);
    this.errorAnimal = this.verificarAnimal(this.animal.animal_codigo);
    this.errorProvincia = this.verificarProvincia(this.animal.provincia);
    this.errorLocalidad = this.verificarLocalidad(this.animal.localidad);
    this.errorTamanio = this.verificarTamanio(this.animal.tamanio);

    if ((this.errorNombre + this.errorAnimal + this.errorProvincia + this.errorLocalidad + this.errorTamanio) > 0) {
      return false;
    }
    return true;
  }

  private verificarNombre(nombre: string): number {
    const patron = /^[a-zA-z]+$/;
    if (nombre.length == 0)
      return 1;
    if (nombre.length > 20)
      return 2;
    if (!patron.test(nombre))
      return 3;
    return 0;
  }

  private verificarAnimal(animal: string): number {
    if (animal == ""){
      return 1;
    }
    return 0;
  }

  private verificarProvincia(provincia: string): number {
    if (provincia == ""){
      return 1;
    }
    return 0;
  }

  private verificarLocalidad(localidad: string): number {
    if (localidad == ""){
      return 1;
    }
    return 0;
  }

  private verificarTamanio(tamaño: string): number {
    if (tamaño == ""){
      return 1;
    }
    return 0;
  }
}
