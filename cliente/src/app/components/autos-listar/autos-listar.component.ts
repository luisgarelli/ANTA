import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/models/autosModel';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-autos-listar',
  templateUrl: './autos-listar.component.html',
  styleUrls: ['./autos-listar.component.css']
})
export class AutosListarComponent implements OnInit {
  autos:any=[];

  constructor(private autosService:AutosService){}

  ngOnInit(): void{
    this.autosService.listarAuto().subscribe
    (
			res => {console.log("Datos del Servicio");
      console.log(res);
     /* this.sinCaracter= this.auto.descripcion?.replace(/[\/\\]+/g,'');
      this.auto.descripcion= this.sinCaracter;*/
    
      this.autos = res 
    },
			err => console.log(err)
		)
  }
}
