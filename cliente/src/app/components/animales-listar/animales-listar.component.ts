import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/models/animalModel';

import { AnimalService } from '../../services/animal.service';
@Component({
  selector: 'app-animales-listar',
  templateUrl: './animales-listar.component.html',
  styleUrls: ['./animales-listar.component.css']
})
export class AnimalesListarComponent implements OnInit {
  animal: Animal;//Usado para instancial el auto a agregar
 
  id: string = "";
  animal2: Animal;//Usado para instancial el auto a modificar
  animales: any = [];
  constructor(private animalService: AnimalService) {
    this.animal = { nombre: "", edad: "",  sexo: "" , raza: "", descripcion: "", alta: ""  };
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
    //---------------------------------------------
  
    
  }
}
