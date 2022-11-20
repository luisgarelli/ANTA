import { Component, OnInit,Input } from '@angular/core';
import { observable, Subscriber } from 'rxjs';
import { Animal } from 'src/app/models/animalModel';
import { Observable } from 'rxjs';
import { AnimalService } from '../../services/animal.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Router} from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

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
  idAnimal:any;
  elegido:any;
  id: string = "";
  animal2: Animal;//Usado para instancial el auto a modificar
  animales: any = [];
  nuevo: any = [];
  letigo:any;
  nombreUsuario:any;
 public page: number=0;
 search:string='';
 search2:string='';
 user:any;
 prov:any;
 filterPost = '';
 searchText: any;
  constructor(private animalService: AnimalService,  private router:Router, private usuariosService: UsuariosService) {
    this.animal = { nombre: "",   sexo: "" , raza: "", descripcion: "", alta: "",imagen:"",tamanio:"",tipo:""  };
    this.animal2 = {nombre: "",   sexo: "" , raza: "", descripcion: "", alta: ""  };
   this.nuevo =[];
    /*
    replace(/\/+/g,'-')
       this.sinCaracter= this.auto.descripcion?.replace(/[\/\\]+/g,'-');;
    this.auto.descripcion = this.sinCaracter;
    */
  }
  
  ngOnInit(): void {
   this.user = this.usuariosService.getId()
    this.animalService.buscarListado(this.user).subscribe(
     
      res => {

        console.log("Datos del Servicio", this.usuariosService.getNombre());
 
       
        this.animales= res;
        console.log("mensaje", this.animales.provincia);
 
        console.log(res);
        
        /*for (let ani of this.animales){
        
         
          console.log(ani.provincia);
         //console.log(ani.provincia)
        }*/
        
      
      },
      err => console.log(err)
    );
   
    this.animalService.listarAnimal().subscribe((data:any)=>{
      this.combo= data;
      })
    
    
    //---------------------------------------------
  
    
  }

 nextPage(){
this.page += 5;
 }
 prevPage(){
  if(this.page > 0 )
  this.page -= 5;
  
 }
 onSearch(search:string){
  this.page =0;
this.search = search.charAt(0).toUpperCase();
console.log(search);

 }
 onSearch2(loc:string){
  this.page =0;
this.search2 = loc.charAt(0).toUpperCase();
console.log(loc);

 }
 provincia(tipo:any)
 {
  console.log(tipo);
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
  cambiarSeleccion(id:any){
    console.log(id);
   
    
   // this.router.navigate(['animales/informacion']);
    this.router.navigate(['animales/informacion',id]);
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
