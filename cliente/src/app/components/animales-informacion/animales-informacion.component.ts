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
import { Solicitud } from 'src/app/models/solicitudModel';

@Component({
  selector: 'app-animales-informacion',
  templateUrl: './animales-informacion.component.html',
  styleUrls: ['./animales-informacion.component.css']

})
export class AnimalesInformacionComponent implements OnInit {
variable :any;
AnimalID: any = [];
Animal :any = [];
usuario :any = [];
registrado :any = [];
verificarUsuario :any = [];
interesados:any=[];
id = "";

idAnimal:any;
nombreUsuario:any;
adopcion: Adopcion;
solicitudes: Solicitud;
cont=0;
boleano: boolean = false;
estadoAnimal ="Pendiente";
descripcion ="Ninguna";
animal2: Animal;
idUsuario:any;
codCelular= 549; 
numeroUsuario = 5491164048188;
celular:any;
nomCelular:any;
animalElegido:any;
disabledValue= false;
disabledValu= false;
valor= true;
idRegistrado:any;
adopcion2: Adopcion;
nombreAnimal:any;
boton: boolean = true;
constructor( private ngxToastService: NgxToastService, private rutaActiva: ActivatedRoute, private animalService: AnimalService,  private usuarioService: UsuariosService) { 
  this.adopcion = {  id_animal: "",  id_usuario: "",tipo_vivienda:"", tipo_propietario:"", caso_alquilar:"", animal_castrado:"",compromiso_animal:"" , balcones:"", acuerdo_familiar:"", animal_propiedad:"", animal_pasear:"",id_registrado:"",estado:""};
  this.animal2 = { estado: "" };
  this.adopcion2 = { estado: "" };
  this.solicitudes = { id_usuario:"",id_animal:"",estado: "",descripcion:"",nombre_animal:"" };

 
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
    
      //-------------------------------------
      this.idUsuario = this.usuarioService.getId();

      /*this.usuarioService.buscarUsuario(this.idUsuario).subscribe(
        res => {
          this.usuario = res
          console.log(this.usuario);
          console.log(this.usuario.numero);
          this.nomCelular = this.usuario.numero;
       
          this.celular = `${this.codCelular}${this.nomCelular}`;
          console.log(this.celular);
        },
        err => console.log(err)
      );*/
      //--------------------------
      this.animalService.buscarUsuario(this.idUsuario).subscribe(
        res => {
          this.verificarUsuario = res
          console.log("verificar usuario",this.verificarUsuario);
          this.animalElegido = this.verificarUsuario.id;
          console.log(this.animalElegido);
          console.log("animal id real",this.AnimalID.id);
         

          for(let usuario of this.verificarUsuario) {
            console.log(usuario.id);
            if(this.AnimalID.id == usuario.id){
                console.log("encontrado",usuario.id);
                this.disabledValue = true;
                this.disabledValu = true
                this.valor = false;
                //valor= true;
            }
     
         }
   
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
  ngOnDestroy(): void {
    this.AnimalID = [];
    this.Animal = [];
  }
  animalCargarDatos() {

    this.animalService.buscarAnimal(this.AnimalID.id).subscribe(
      res => {
        this.Animal = res
        console.log(this.Animal);
        console.log(" id de usuario q lo registro", this.Animal.id_usuario);
        this.idRegistrado = this.Animal.id_usuario;
        console.log("registrado",this.idRegistrado);
        console.log("nombre del animal", this.Animal.nombre);
        this.nombreAnimal = this.Animal.nombre;
        this.usuarioService.buscarUsuario(this.idRegistrado).subscribe(
          res => {
            this.registrado = res;
            console.log(res);
            console.log(this.registrado.numero);
          this.nomCelular = this.registrado.numero;
       
          this.celular = `${this.codCelular}${this.nomCelular}`;
          console.log(this.celular);
          },
          err => console.log(err)
        );
        
      },
      err => console.log(err)
    );
   
    
   
  }
  agregar(animal:any){

    this.adopcion.id_animal = animal;
   
    this.nombreUsuario = this.usuarioService.getNombre();
  this.adopcion.id_usuario = this.nombreUsuario;


  /*this.animal2.estado = this.estadoAnimal;
  this.animalService.modificarAnimal(this.AnimalID,this.animal2).subscribe(
    res => {
      console.log("Datos del Servicio");
      console.log(res);

    },
    err => console.log(err)
  );*/
  //
 
  //
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
  seleccion(idAnim:any){
console.log (idAnim);
this.idAnimal = idAnim;


  }
  aceptacion(){
    this.ngOnInit();
  }
 agrega(){
 this.boton = false;
  this.adopcion.id_animal = this.idAnimal;
  this.adopcion.estado = this.estadoAnimal;
  this.adopcion.id_registrado = this.idUsuario;
  this.nombreUsuario = this.usuarioService.getNombre();
  this.adopcion.id_usuario = this.nombreUsuario;
  this.animalService.buscarId(this.idAnimal).subscribe(
    res => {
      console.log("Datos del Servicio");
   this.boleano = true;
    this.cont = this.cont+1;
    console.log("respuesta :",res,this.cont);
    },
    err => console.log(err)
  );
  //
  this.solicitudes.id_usuario = this.idUsuario;
  this.solicitudes.id_animal = this.idAnimal;
  this.solicitudes.estado = this.estadoAnimal;
  this.solicitudes.descripcion = this.descripcion;
  this.solicitudes.nombre_animal = this.nombreAnimal;
  this.animalService.guardarSolicitud(this.solicitudes).subscribe(
    res => {
      console.log("Datos del Servicio");
      console.log(res);

      this.ngOnInit();
    },
    err => console.log(err)
  );
  //
if(this.boleano == false){
  console.log("se puede adoptar");
  /*this.animal2.estado = this.estadoAnimal;
  this.animalService.modificarAnimal(this.idAnimal,this.animal2).subscribe(
    res => {
      console.log("Datos del Servicio");
      console.log(res);

    },
    err => console.log(err)
  );*/
  this.ngxToastService.onSuccess('Exitoso!','La solicitud de la adopción está pendiente del administrador')
  this.animalService.guardarAdopcion(this.adopcion).subscribe(
    res => {
      console.log("Datos del Servicio");
      console.log(res);

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
  if(this.boleano == true){
    console.log("ya ha adoptado al animal");
  
      this.ngxToastService.onDanger('Aviso','El Animal ya ha sido solicitado')
    
  }
  
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

