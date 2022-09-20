import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-ingresar',
  templateUrl: './usuarios-ingresar.component.html',
  styleUrls: ['./usuarios-ingresar.component.css']
})
export class UsuariosIngresarComponent implements OnInit {
  user={  usuario:"", password:""};
  reintentar:boolean=false;
  mensaje:string="";
  usuarios:any;
  constructor(private router:Router, private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.listarUsuarios().subscribe
    (
			res => {
      this.usuarios = res 
    },
			err => console.log(err)
		)
  }

  ingresar(){
		console.log("Sign In");
    console.log(this.user);
    /*if(this.validarUsuario(this.user.usuario,this.user.password)){
		  console.log("login correcto");
      //localStorage.setItem('token',result.token);
	    localStorage.setItem('token','LogInOK');
      this.router.navigate(['usuarios/home']);
		}
		else{
		  console.log("usurio y/o contraseña incorrectos");
      this.reintentar=true;
      this.mensaje="usuario y/o contraseña incorrectos";
		}*/
    this.usuariosService.ingresar(this.user).subscribe(
      res => {
        let result: any = res; /*Casteamos a una variable local para que no de error
        al preguntar por sus atributos o propiedades del objeto res*/
        console.log(res,result);
        switch (result.login) {
          case "ok":
            console.log(result.mensaje);
           // localStorage.setItem('token', 'LogInOK');
           this.usuariosService.setToken(result.token);
           this.usuariosService.setRol(result.rol);
            this.router.navigate(['usuarios/home']);
            this.mensaje = result.mensaje;
            break;
          case "incorrecto":
            console.log(result.mensaje);
            this.reintentar = true;
            this.mensaje = result.mensaje;
            break;
          case "invalido":
            console.log(result.mensaje);
            this.reintentar = true;
            break;
            default:
              console.log("Error en el switch");
        }
      },
      err => {
        console.log(err.error.message);
      }
    )

	}
  private validarUsuario(nombre:string, password:string):boolean{
    for (let usuario of this.usuarios) {
      if (usuario.nombre == nombre && usuario.password == password) {
        return true;
      }
    }
    return false;
  }
  recargarForm(){
    this.reintentar=false;
    this.user.usuario="";
    this.user.password="";
	this.mensaje="";
  }
   


}
