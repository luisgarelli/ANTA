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
@Component({
  selector: 'app-animales-registrados',
  templateUrl: './animales-registrados.component.html',
  styleUrls: ['./animales-registrados.component.css']
})
export class AnimalesRegistradosComponent implements OnInit {
  idUsuario:any;
  usuario :any = [];
  verificarUsuario:any;
  constructor(private ngxToastService: NgxToastService, private rutaActiva: ActivatedRoute, private animalService: AnimalService,  private usuarioService: UsuariosService, private router:Router) { }

  ngOnInit(): void {
    this.idUsuario = this.usuarioService.getId();

    this.usuarioService.buscarUsuario(this.idUsuario).subscribe(
      res => {
        this.usuario = res
        console.log(this.usuario);
        console.log(this.usuario.numero);
       
      },
      err => console.log(err)
    );
    this.animalService.buscarUsuario(this.idUsuario).subscribe(
      res => {
        this.verificarUsuario = res
        console.log("verificar usuario",this.verificarUsuario);
        
      },
      err => console.log(err)
    );
    
  }
  cambiarSeleccion(id:any){
      console.log(id);
      this.router.navigate(['interesados/informacion',id]);
  }
  perfil(id:any){
    console.log(id);
    this.router.navigate(['animales/datos',id]);
}

}
