import { Component, OnInit } from '@angular/core';
import { Raza } from 'src/app/models/razaModel';
import { Animal } from 'src/app/models/animalModel';
import { Sexo } from 'src/app/models/sexoModel';
import { AnimalService } from '../../services/animal.service';
@Component({
  selector: 'app-animal-administrar',
  templateUrl: './animal-administrar.component.html',
  styleUrls: ['./animal-administrar.component.css']
})
export class AnimalAdministrarComponent implements OnInit {

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
  //
  modificarMayuscula:any;
  patenteMayuscula:any;
  descripcionCaracter:any;
 
  //--
  errorPatente=0;
  errorTelefono=0;
  errorDescripcion=0;
//--
 //--
 errorMoPatente=0;
 errorMoTelefono=0;
 errorMoDescripcion=0;
//--
  constructor(private animalService: AnimalService) {
    this.animal = { nombre: "", edad: "",  sexo: "" , raza: "", descripcion: "", alta: ""  };
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
  console.log(e.target.value);
  this.razaAnimal = e.target.value;
  console.log(this.razaAnimal);
  }
  agregar() {
 
   // console.log(this.auto.patente, this.auto.telefono, this.auto.descripcion);
  
   this.animal.sexo= this.sexoAnimal;

   this.animal.raza= this.razaAnimal;
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
