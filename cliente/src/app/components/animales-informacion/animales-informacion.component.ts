import { Component, OnInit } from '@angular/core';

import { AnimalService } from '../../services/animal.service';
@Component({
  selector: 'app-animales-informacion',
  templateUrl: './animales-informacion.component.html',
  styleUrls: ['./animales-informacion.component.css']

})
export class AnimalesInformacionComponent implements OnInit {
variable :any;
  constructor() { }

  ngOnInit(): void {
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

