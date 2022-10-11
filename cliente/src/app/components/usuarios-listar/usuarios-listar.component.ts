import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from 'src/app/models/usuarioModel';

@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.css']
})
export class UsuariosListarComponent implements OnInit {
 
  usuario: Usuarios;//Usado para instancial el auto a agregar
  id: string = "";
  usuario2: Usuarios;//Usado para instancial el auto a modificar
  usuarios: any = [];
  combo1:any;
  sexoUsuario:any;
  combo2:any;
  provincias:any;
  //
 
 
 
//--
  constructor(private usuarioService: UsuariosService) {
    this.usuario = { nombre: "", email: "", password: "", rol:"", alta :"",activado:"", perfil:"",sexo:"", provincia:""};
    this.usuario2 = { nombre: "", email: "", password: "", rol:"", alta :"",activado:"", perfil:"",sexo:"", provincia:""};
    
    /*
    replace(/\/+/g,'-')
       this.sinCaracter= this.auto.descripcion?.replace(/[\/\\]+/g,'-');;
    this.auto.descripcion = this.sinCaracter;
    */
  }

  ngOnInit(): void {
    
    this.usuarioService.listarUsuarios().subscribe(
     
      res => {
        console.log("Datos del Servicio");
     //this.mostrar();
     //empieza
   
  
    //termina

        console.log(res);
        this.usuarios = res
      },
      err => console.log(err)
    )
    this.usuarioService.listarSexo().subscribe((data:any)=>{
      this.combo1= data;
      })
      this.usuarioService.listarProvincia().subscribe((data:any)=>{
        this.combo2= data;
        })
    
  }
  cambiarSeleccion1(e:any){
    console.log(e.target.value);
    this.sexoUsuario = e.target.value;
    console.log(this.sexoUsuario);
    }
    cambiarSeleccion2(e:any){
      console.log(e.target.value);
      this.provincias = e.target.value;
      console.log(this.provincias);
      }

      BorrarUsuario(id: string)
  {
    if (id != "")
    {
      console.log("Auto borrado correctamente");
      this.usuarioService.eleminarUsuario(id).subscribe(
        res => {
          console.log("Datos del Servicio");
          console.log(res);
          this.usuarios = res 
  
          this.ngOnInit();
        },
        err => console.log(err)
      )
    }
  }
  agregar() {
 
    // console.log(this.auto.patente, this.auto.telefono, this.auto.descripcion);
   
    this.usuario.sexo= this.sexoUsuario;
    this.usuario.provincia= this.provincias;
     this.usuarioService.guardarUsuario(this.usuario).subscribe(
       res => {
         console.log("Datos del Servicio");
         console.log(res);
         //
        
 
   
         /*this.sinCaracter= this.auto.descripcion?.replace(/[\/\\]+/g,'?');
         this.auto.descripcion = this.sinCaracter;*/
         //this.autos = res
       
         /*
           Para ver el listado actualizado debemos recargar al componente. Lo vamos
           a lograr invocando al metodo ngOnInit.
         */
         this.ngOnInit();
       },
       err => console.log(err)
     );
 
    
   }
}
