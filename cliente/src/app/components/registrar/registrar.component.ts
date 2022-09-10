import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarioModel';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  usuario: Usuarios;//Usado para instancial el auto a agregar
  
  id: string = "";
  usuario2: Usuarios;//Usado para instancial el auto a modificar
  usuarios: any = [];
 
  constructor(private usuarioService: UsuariosService) {

    this.usuario = { nombre: "", email: "",  password: "" , rol: "", alta: "", activado: "" ,perfil:"",sexo:"",provincia:"" };
    this.usuario2 = {nombre: "", email: "",  password: "" , rol: "", alta: "", activado: "", perfil:"",sexo:"",provincia:""  };
   }


   ngOnInit(): void {
    
    this.usuarioService.listarUsuarios().subscribe(
     
      res => {
        console.log("Datos del Servicio");
     //this.mostrar();
     //empieza
   
  
    //termina

        console.log(res);
        this.usuarios  = res
      },
      err => console.log(err)
    )
    //---------------------------------------------
 
    
  }

  agregar() {
 
    // console.log(this.auto.patente, this.auto.telefono, this.auto.descripcion);
   
     this.usuarioService.registrar(this.usuario).subscribe(
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
