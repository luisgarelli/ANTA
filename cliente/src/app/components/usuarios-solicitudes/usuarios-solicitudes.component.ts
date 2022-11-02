import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { AnimalesListarComponent } from '../animales-listar/animales-listar.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Adopcion } from 'src/app/models/adopcionModel';
import { UsuariosService } from '../../services/usuarios.service';
import { NgxToastService } from 'ngx-toast-notifier';
import { Animal } from 'src/app/models/animalModel';
import { Solicitud } from 'src/app/models/solicitudModel';
@Component({
  selector: 'app-usuarios-solicitudes',
  templateUrl: './usuarios-solicitudes.component.html',
  styleUrls: ['./usuarios-solicitudes.component.css']
})
export class UsuariosSolicitudesComponent implements OnInit {
  idUsuario:any;
  usuario :any = [];
  solicitudes:any;
  constructor(private animalService: AnimalService,  private usuarioService: UsuariosService, private router:Router) { }

  ngOnInit(): void {
    this.idUsuario = this.usuarioService.getId();

    this.animalService.buscaSolicitu(this.idUsuario).subscribe(
      res => {
        this.solicitudes = res
        console.log("verificar solicitudes",this.solicitudes);
     
      },
      err => console.log(err)
    );
    //
  

  }

  eliminar(id:any){
    console.log(id);
   this.animalService.eliminarSolicitud(id).subscribe(
      res => {
        console.log("Datos del Servicio");
        console.log(res);
      

        this.ngOnInit();
      },
      err => console.log(err)
    )
  }

}
