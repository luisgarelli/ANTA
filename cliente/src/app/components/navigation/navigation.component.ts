import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  //instanciar el servivio para el comp navigation y enrutador

  token: any = "";
  tokenValidado: boolean = false;
  rol: any;
  roladmin: boolean = false;
  datosMenu=[{'titulo':'','url':''}];

  constructor(private usuariosService:UsuariosService, private router:Router)
  { 
    this.token= usuariosService.getToken();
    this.rol= usuariosService.getRol();
  }

  ngOnInit(): void {
    this.ValidarToken()
    this.ValidarRol();
    this.MostrarMenu();
  }

  MostrarMenu()
  {
    if(this.tokenValidado == true && this.roladmin == true)
    {
      this.datosMenu=
      [
        {
          'titulo':'HOME',
          'url':'usuarios/home'
        },
        {
          'titulo':'LISTAR',
          'url':'autos/listar'
        },
        {
          'titulo':'ADMINISTRAR',
          'url':'autos/administrar'
        }
      ];
    }
    else if(this.tokenValidado == true)
    {
      this.datosMenu=
      [
        {
          'titulo':'HOME',
          'url':'usuarios/home'
        },
        {
          'titulo':'LISTAR',
          'url':'autos/listar'
        }
      ];
    }
    else
    {
      this.datosMenu=
      [
        {
          'titulo':'HOME',
          'url':'usuarios/home'
        },
        {
          'titulo':'INICIAR SESIÓN',
          'url':'usuarios/ingresar'
        },
        {
          'titulo':'REGISTRARSE',
          'url':'usuarios/registrar'
        }
      ];
    }
  }

  ValidarRol()
  {
    if(this.rol="admin")
    {
      this.roladmin = true;
    }
    else{
      this.roladmin = false
    }
  }


  ValidarToken(){
    if(this.token != ""){
      this.tokenValidado = true;
    }
    else{
      this.tokenValidado = false;
    }
  }

  logout(){
    /*Es de notar que el metodo logOut podria haberse hecho en un componente y mantener la sintaxis usuarios/salir pero nos vamos a ahorrar ese paso*/ 
    this.usuariosService.logOut();
    this.tokenValidado = false;
    this.token="";
    console.log("Cerrando sesion!!!");
    this.router.navigate(['usuarios/principal']);
  }
}