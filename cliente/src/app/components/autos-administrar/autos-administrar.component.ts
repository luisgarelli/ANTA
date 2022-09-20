import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/models/autosModel';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-autos-administrar',
  templateUrl: './autos-administrar.component.html',
  styleUrls: ['./autos-administrar.component.css']
})
export class AutosAdministrarComponent implements OnInit {
 

  auto: Auto;//Usado para instancial el auto a agregar
  id_auto: string = "";
  auto2: Auto;//Usado para instancial el auto a modificar
  autos: any = [];
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
  constructor(private autosService: AutosService) {
    this.auto = { patente: "", telefono: "", descripcion: "" };
    this.auto2 = { patente: "", telefono: "", descripcion: "" };
    /*
    replace(/\/+/g,'-')
       this.sinCaracter= this.auto.descripcion?.replace(/[\/\\]+/g,'-');;
    this.auto.descripcion = this.sinCaracter;
    */
  }

  ngOnInit(): void {
    
    this.autosService.listarAuto().subscribe(
     
      res => {
        console.log("Datos del Servicio");
     //this.mostrar();
     //empieza
   
  
    //termina

        console.log(res);
        this.autos = res
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
  agregar() {
    //this.patenteMayuscula= this.auto.patente.toUpperCase();
    /*var str = "abc/def/ghi/jkm/.../..n";
var res = str.replace(/\//g, "-");
console.log(res); */
    //empieza
    this.patenteMayuscula = this.auto.patente?.toUpperCase();
    this.auto.patente= this.patenteMayuscula;
  /*  this.descripcionCaracter= this.auto.descripcion?.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');;
    this.auto.descripcion = this.descripcionCaracter;*/
    //termina
console.log(this.auto.descripcion);
     //this.auto.descripcion?.replace(/\"/g, '\\"');
    
    console.log(this.auto.patente, this.auto.telefono, this.auto.descripcion);
    this.autosService.guardarAuto(this.auto).subscribe(
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
    console.log(this.id_auto);
    //let econtrado = this.autos.find((obj:Auto) => {
    this.auto2 = this.autos.find((obj: Auto) => {
      console.log(obj);
      return obj.id_auto == this.id_auto;
    });
    console.log("Modifica =>" + this.auto2);
  }


  modificar() { 
    console.log("Modifica =>" + this.auto2);
    this.modificarMayuscula = this.auto2.patente?.toUpperCase();
    this.auto2.patente= this.modificarMayuscula;
    this.autosService.modificarAuto(this.id_auto,this.auto2).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);

      },
      err => console.log(err)
    );
  }

  recargarForm(){
    this.auto.patente = "";
    this.errorPatente = 0;    
    this.auto.telefono = "";
    this.errorTelefono = 0;    
    this.auto.descripcion = "";
    this.errorDescripcion = 0;
  }
  
  recargarMoForm(){
    this.auto2.patente = "";
    this.errorMoPatente = 0;    
    this.auto2.telefono = "";
    this.errorMoTelefono = 0;    
    this.auto2.descripcion = "";
    this.errorMoDescripcion = 0;
  }
  verificarForm():boolean{
    
    this.errorPatente=this.verificarPatente(this.auto.patente);
    this.errorTelefono=this.verificarTelefono(this.auto.telefono);
    this.errorDescripcion=this.verificarDescripcion(this.auto.descripcion);
    
    if(  (this.errorPatente+this.errorTelefono+this.errorDescripcion)>0){
      return false;
    }
    return true;
  }
  verificarMoForm():boolean{
    
    this.errorMoPatente=this.verificarMoPatente(this.auto2.patente);
    this.errorMoTelefono=this.verificarMoTelefono(this.auto2.telefono);
    this.errorMoDescripcion=this.verificarMoDescripcion(this.auto2.descripcion);
    
    if(  (this.errorMoPatente+this.errorMoTelefono+this.errorMoDescripcion)>0){
      return false;
    }
    return true;
  }
  private verificarPatente(patente:any): number {
    const patron=/^[a-zA-z]{2}[0-9]{3}[a-zA-Z]{2}$/;
    if(patente.length==0)
      return 1;
    if(patente.length>8)
      return 2;
    if(!patron.test(patente))
      return 3;
    return 0;
  }
  private verificarTelefono(telefono:any): number {
    const patron=/^[0-9]{0,11}$/;
    if(telefono.length==0)
      return 1;
    if(telefono.length>10)
      return 2;
      if(telefono.length<6)
      return 3;
    if(!patron.test(telefono))
      return 4;
    return 0;
  }
  private verificarDescripcion(descripcion:any): number {
    const patron=/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]+)*$/g;
    if(descripcion.length==0)
      return 1;
    if(descripcion.length>70)
      return 2;
     
    if(!patron.test(descripcion))
      return 3;
    return 0;
  }
  limpiarPatente() {
    if (this.errorPatente > 0) {
      console.log("Limpiar patente");
      this.auto.patente = "";
      this.errorPatente = 0;
    }
  }

  limpiarTelefono() {
    if (this.errorTelefono > 0) {
      console.log("Limpiar telefono");
      this.auto.telefono = "";
      this.errorTelefono = 0;
    }
  }
  limpiarDescripcion() {
    if (this.errorDescripcion > 0) {
      console.log("Limpiar descripcion");
      this.auto.descripcion= "";
      this.errorDescripcion = 0;
    }
  }

  //

  private verificarMoPatente(patente:any): number {
    const patron=/^[a-zA-z]{2}[0-9]{3}[a-zA-Z]{2}$/;
    if(patente.length==0)
      return 1;
    if(patente.length>8)
      return 2;
    if(!patron.test(patente))
      return 3;
    return 0;
  }
  private verificarMoTelefono(telefono:any): number {
    const patron=/^[0-9]{0,11}$/;
    if(telefono.length==0)
      return 1;
    if(telefono.length>10)
      return 2;
      if(telefono.length<6)
      return 3;
    if(!patron.test(telefono))
      return 4;
    return 0;
  }
  private verificarMoDescripcion(descripcion:any): number {
    const patron=/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]+)*$/g;
    if(descripcion.length==0)
      return 1;
    if(descripcion.length>30)
      return 2;
     
    if(!patron.test(descripcion))
      return 3;
    return 0;
  }
  limpiarMoPatente() {
    if (this.errorMoPatente > 0) {
      console.log("Limpiar patente");
      this.auto2.patente = "";
      this.errorMoPatente = 0;
    }
  }

  limpiarMoTelefono() {
    if (this.errorMoTelefono > 0) {
      console.log("Limpiar telefono");
      this.auto2.telefono = "";
      this.errorMoTelefono = 0;
    }
  }
  limpiarMoDescripcion() {
    if (this.errorMoDescripcion > 0) {
      console.log("Limpiar descripcion");
      this.auto2.descripcion= "";
      this.errorMoDescripcion = 0;
    }
  }
}
