import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-home',
  templateUrl: './usuarios-home.component.html',
  styleUrls: ['./usuarios-home.component.css']
})
export class UsuariosHomeComponent implements OnInit {

  rol: any;
  constructor(private usuariosService: UsuariosService)
  {
    this.rol= usuariosService.getRol();
  }

  ngOnInit(): void 
  {
  }
}
