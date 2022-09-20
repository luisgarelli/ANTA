import { Component, OnInit } from '@angular/core';
import { observable, Subscriber } from 'rxjs';
import { Animal } from 'src/app/models/animalModel';
import { Observable } from 'rxjs';
import { AnimalService } from '../../services/animal.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Router} from '@angular/router';


@Component({
  selector: 'app-animales-listar',
  templateUrl: './animales-listar.component.html',
  styleUrls: ['./animales-listar.component.css']
})
export class AnimalesListarComponent implements OnInit {
  myimagess!: Observable<any>;
  animal: Animal;//Usado para instancial el auto a agregar
  myimage!: Observable<any>;
  base64code!: any
  combo:any;
  elegido:any;
  id: string = "";
  animal2: Animal;//Usado para instancial el auto a modificar
  animales: any = [];
  letigo:any;
  constructor(private animalService: AnimalService,  private router:Router) {
    this.animal = { nombre: "", edad: "",  sexo: "" , raza: "", descripcion: "", alta: "",imagen:""  };
    this.animal2 = {nombre: "", edad: "",  sexo: "" , raza: "", descripcion: "", alta: ""  };
   
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
    this.animalService.listarAnimal().subscribe((data:any)=>{
      this.combo= data;
      })
    //---------------------------------------------
  
    
  }
  modelo(){
    for(let image of this.animales){
        console.log(image.id);
        this.letigo = image.imagen;
    }
   
  }
 
 
  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    this.convertToBase64(file)
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
  cambiarSeleccion(e:any){
    console.log(e);
  this.elegido =e;
    this.router.navigate(['animales/informacion']); 
    }

// -------------------------------------------------------------
    onChangee(event: Event) {
      const target= event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
      this.convertsToBase64(file);
      /*
      onChange = (event: Event) => {
    const target= event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
      */ 
      
    }
  
    convertsToBase64(file: File) {
      this.letigo = new Observable((subscriber: Subscriber<any>) => {
        this.readFiles(file, subscriber);
      });
      this.letigo.subscribe((d:any) =>{
          console.log(d);
      });
    }
  
    readFiles(file: File, subscriber: Subscriber<any>) {//leer
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


}
