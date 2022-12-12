import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-ingresar',
  templateUrl: './usuarios-ingresar.component.html',
  styleUrls: ['./usuarios-ingresar.component.css']
})
export class UsuariosIngresarComponent implements OnInit {
  user = { usuario: "", password: "" };
  reintentar: boolean = false;
  mensaje: string = "";
  usuarios: any;
  errorUsuario = 0;
  errorPassword = 0;

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.listarUsuarios().subscribe
      (
        res => {
          this.usuarios = res
        },
        err => console.log(err)
      )
  }

  ingresar() {
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
        console.log(res, result);
        switch (result.login) {
          case "ok":
            console.log(result.mensaje);
            // localStorage.setItem('token', 'LogInOK');
            this.usuariosService.setToken(result.token);
            this.usuariosService.setRol(result.rol);

            this.usuariosService.setNombre(result.nombre);
            this.usuariosService.setId(result.id);
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
  private validarUsuario(nombre: string, password: string): boolean {
    for (let usuario of this.usuarios) {
      if (usuario.nombre == nombre && usuario.password == password) {
        return true;
      }
    }
    return false;
  }
  recargarForm() {
    this.reintentar = false;
    this.user.usuario = "";
    this.user.password = "";
    this.mensaje = "";
    this.limpiarUsuario();
    this.limpiarPassword();
  }

  verificarForm(): boolean {
    this.errorUsuario = this.verificarUsuario(this.user.usuario);
    this.errorPassword = this.verificarPassword(this.user.password);
    if ((this.errorUsuario + this.errorPassword) > 0) {
      return false;
    }
    return true;
  }

  private verificarUsuario(usuario: string): number {
    const patron = /^[a-zA-z]+$/;
    if (usuario.length == 0)
      return 1;
    if (usuario.length > 20)
      return 2;
    if (!patron.test(usuario))
      return 3;
    return 0;
  }

  private verificarPassword(password: any): number {
    const patron = /^[A-Za-z0-9]{6,}$/;
    if (password.length == 0)
      return 1;
    if (password.length > 20)
      return 2;
    if (!patron.test(password))
      return 3;
    return 0;
  }

  limpiarUsuario() {
    if (this.errorUsuario > 0) {
      console.log("Limpiar usuario");
      this.user.usuario = "";
      this.errorUsuario = 0;
    }
  }

  limpiarPassword() {
    if (this.errorPassword > 0) {
      console.log("Limpiar password");
      this.user.password = "";
      this.errorPassword = 0;
    }
  }
}
