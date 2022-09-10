import { Component, OnInit } from '@angular/core';
import { Raza } from 'src/app/models/razaModel';
import { Animal } from 'src/app/models/animalModel';
import { Sexo } from 'src/app/models/sexoModel';
import { AnimalService } from '../../services/animal.service';
import { Provincias } from 'src/app/models/provinciaModel';

import { Localidades } from 'src/app/models/localidadModel';

@Component({
  selector: 'app-animales-registrar',
  templateUrl: './animales-registrar.component.html',
  styleUrls: ['./animales-registrar.component.css']
})
export class AnimalesRegistrarComponent implements OnInit {

  animal: Animal;//Usado para instancial el auto a agregar
  sexo:Sexo;
  raza:Raza;
  id: string = "";
  animal2: Animal;//Usado para instancial el auto a modificar
  animales: any = [];
  combo:any;
  sexoAnimal:any;
  combo2:any;
  razaAnimal:any;
  combo3:any;
  combo4:any;
  combo5:any;
  provinciaUser:any;
  localidadUser:any;
  codigo: any;
  codigo2: any;
  tipoAnimal:any;
  //
  modificarMayuscula:any;
  patenteMayuscula:any;
  descripcionCaracter:any;
 
  //--
  errorPatente=0;
  errorTelefono=0;
  errorDescripcion=0;
  localidades: any = [];
//--
 //--
 errorMoPatente=0;
 errorMoTelefono=0;
 errorMoDescripcion=0;
//--
  constructor(private animalService: AnimalService) {
    this.animal = { nombre: "", edad: "",  sexo: "" , raza: "", descripcion: "", alta: "", provincia: "", localidad: "" , animal_codigo: "" };
    this.animal2 = {nombre: "", edad: "",  sexo: "" , raza: "", descripcion: "", alta: ""  };
    this.sexo = { id: "", sexo: "" };
    this.raza = { id: "", raza: "" };
    /*
    replace(/\/+/g,'-')
       this.sinCaracter= this.auto.descripcion?.replace(/[\/\\]+/g,'-');;
    this.auto.descripcion = this.sinCaracter;
    */
  }

  ngOnInit(): void {
    
    this.animalService.listarAnimal().subscribe(
     
      res => {
        console.log("Datos del Servicio");
     //this.mostrar();
     //empieza
   
  
    //termina

        console.log(res);
        this.animales  = res
      },
      err => console.log(err)
    )
    //---------------------------------------------
    this.animalService.listaSexo().subscribe((data:any)=>{
      this.combo= data;
      })
      this.animalService.listaRaza().subscribe((data:any)=>{
        this.combo2= data;
        })


        this.animalService.listarProvincia().subscribe((data:any)=>{
          this.combo3= data;
          })

          this.animalService.listAnimales().subscribe((data:any)=>{
            this.combo5= data;
            })
          this.animalService.listarLocalidad().subscribe((data:any)=>{
            this.combo4= data;
            })

            this.animalService.listarLocalidad().subscribe(
     
              res => {
                console.log("Datos del Servicio");
             //this.mostrar();
             //empieza
           
          
            //termina
        
                //console.log(res);
                this.localidades  = res
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

cambiarSeleccion(e:any){
console.log(e.target.value);
this.sexoAnimal = e.target.value;
console.log(this.sexoAnimal);
}
cambiarSeleccion2(e:any){
 // console.log(e.target.value);
  this.razaAnimal = e.target.value;
  console.log(this.razaAnimal);

 

  }
  cambiarSeleccion5(state:any){
      
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
        console.log("respuesta :",res);
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
      cambiarSeleccion7(e:any){
    
        console.log(e.target.value);
        this.tipoAnimal = e.target.value;
        
        console.log(this.tipoAnimal);

        this.animalService.buscaRaza(this.tipoAnimal).subscribe(
          res => {
            console.log("Datos del Servicio");
            console.log("respuesta :",res);
          this.codigo2=res;
      
          },
          err => console.log(err)
        );
        }


  agregar() {
 
   // console.log(this.auto.patente, this.auto.telefono, this.auto.descripcion);
  
   this.animal.sexo= this.sexoAnimal;
    this.animal.animal_codigo = this.tipoAnimal;
   this.animal.raza= this.razaAnimal;

   this.animal.provincia = this.provinciaUser;
  
   this.animal.localidad = this.localidadUser;
    this.animalService.guardarAnimal(this.animal).subscribe(
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

  seleccionar() {
    console.log(this.id);
    //let econtrado = this.autos.find((obj:Auto) => {
      console.log("hola "+this.animal2);
    this.animal2 = this.animales.find((obj: Animal) => {
      console.log(obj);
      return obj.id == this.id;
    });
    console.log("Modifica =>" + this.animal2);
  }
  BorrarAnimal(id: string)
  {
    if (id != "")
    {
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

  modificar() { 
    console.log("Modifica =>" + this.animal2);
    this.animalService.modificarAnimal(this.id,this.animal2).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);

      },
      err => console.log(err)
    );
  }

 

}
