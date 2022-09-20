import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { Provincias } from 'src/app/models/provinciaModel';
import { Sexo2 } from 'src/app/models/sexoUserModel';
import { Localidades } from 'src/app/models/localidadModel';
@Component({
  selector: 'app-usuarios-registrar',
  templateUrl: './usuarios-registrar.component.html',
  styleUrls: ['./usuarios-registrar.component.css']
})
export class UsuariosRegistrarComponent implements OnInit {
  user={  nombre:"", email:"", password:"",repassword:"", sexo:"",provincia:"",localidad:""};
  errorNombre=0;
  errrorPassword=0;
  errorRePassrword=0;
  errorEmail=0;
  sexo: Sexo2;
  combo1:any;
  sexoUser:any;

  provincia: Provincias; //0
  combo2:any;
  provinciaUser:any;
  id: string = "";
  localidad: Localidades;//0
  combo3:any;
  localidadUser:any;
  mensaje: any ="";
  reintentar: boolean=false;
  localidades: any = [];
  provincias: any = [];
  ciudades:any;
  codigo: any;


  loc: any;

  combo4:any;
  local:any;
selecciones: any=[];
  constructor(private router: Router,private  usuariosService: UsuariosService) { 
    this.sexo = { id: "", sexo: "" };
    this.provincia = { id: "", provincia: "" };
  
    this.localidad = { id: "", id_privincia: "", localidad:"" };
  }
  

  ngOnInit(): void {
    
  
   
      this.usuariosService.listarSexo().subscribe((data:any)=>{
        this.combo1= data;
        })
        this.usuariosService.listarProvincia().subscribe((data:any)=>{
          this.combo2= data;
          })
          this.usuariosService.listarLocalidad().subscribe((data:any)=>{
            this.combo3= data;
            })

            this.usuariosService.listarLocalidad().subscribe(
     
              res => {
                console.log("Datos del Servicio");
             //this.mostrar();
             //empieza
           
          
            //termina
        
               // console.log(res);
                this.localidades  = res
              },
              err => console.log(err)
            )

  }
  cambiarSeleccion(e:any){
    console.log(e.target.value);
    this.sexoUser = e.target.value;
    console.log(this.sexoUser);
    }
    /*
    
     seleccionar() {
    console.log(this.id);
    //let econtrado = this.autos.find((obj:Auto) => {
      console.log("hola "+this.animal2);
    this.animal2 = this.animales.find((obj: Animal) => {
      console.log(obj);
      return obj.id == this.id;
    });
    console.log("Modifica =>" + this.animal2);
  }
    */
    cambiarSeleccion2(state:any){
      
      this.provinciaUser = state.target.value;
      console.log(this.provinciaUser);
      //this.localidades = this.usuariosService.listarLocalidad();
     // console.log(this.localidades);
     // this.localidades = this.usuariosService.listarLocalidad().filter(e=> e.codigo == state );
      console.log(this.localidades);
   //this.provinciaUser = this.loc;
      
      //console.log(this.combo4);
      //console.log("Modifica =>" + this.localidad);
  
        
      this.usuariosService.buscarLocalidad(this.provinciaUser).subscribe(
        res => {
          console.log("Datos del Servicio");
         // console.log("respuesta :",res);
        this.codigo=res;

        },
        err => console.log(err)
      );
//
      }
      cambiarSeleccion3(e:any){
      
        console.log(e.target.value);
        this.localidadUser = e.target.value;
        
        console.log(this.localidadUser);
        }
      
     



  registrar(){
		console.log("Sign Up");
    console.log(this.user);
    this.user.provincia = this.provinciaUser;
    this.user.sexo= this.sexoUser;
    this.user.localidad = this.localidadUser;
    this.usuariosService.registrar(this.user).subscribe(
    
      res => {
        let result: any = res; /*Casteamos a una variable local para que no de error
        al preguntar por sus atributos o propiedades del objeto res*/
        console.log(res,result);
        switch (result.save) {
          case "ok":
            console.log(result.mensaje);
            this.router.navigate(['/']);
            break;
          case "invalido":
            console.log(result.mensaje);
			this.mensaje = result.mensaje;
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


  recargarForm(){
    this.user.nombre = "";
    this.errorNombre = 0;    
    this.user.password = "";
    this.errrorPassword = 0;    
    this.user.repassword = "";
    this.errorRePassrword = 0;
    this.user.email = "";
    this.errorEmail = 0;
    this.reintentar = false;
  }
  verificarForm():boolean{
    this.errorNombre=this.verificarNombre(this.user.nombre);
    this.errrorPassword=this.verificarPassword(this.user.password);
    this.errorRePassrword=this.verificarRePassword(this.user.password, this.user.repassword);
    this.errorEmail=this.verificarEmail(this.user.email);
    if(  (this.errorNombre+this.errrorPassword+this.errorRePassrword+this.errorEmail)>0){
      return false;
    }
    return true;
  }
  private verificarNombre(nombre:string):number {
    const patron=/^[a-zA-z]+$/;
    if(nombre.length==0)
      return 1;
    if(nombre.length>20)
      return 2;
    if(!patron.test(nombre))
      return 3;
    return 0;
  }
  
  private verificarPassword(password:any): number {
    const patron=/^[A-Za-z0-9]{6,}$/;
    if(password.length==0)
      return 1;
    if(password.length>20)
      return 2;
    if(!patron.test(password))
      return 3;
    return 0;
  }
  
  private verificarRePassword(password:any, repassword:any): number {
    if(password!=repassword){
      return 1;
    }
    return 0;
  }
  
  private verificarEmail(email:any): number {
    const patron=/^[a-z0-9]{1,10}@[a-z0-9]{1,10}.[a-z]{2,3}$/;
    if(email.length==0)
      return 1;
    if(email.length>20)
      return 2;
    if(!patron.test(email))
      return 3;
    return 0;
  }
  limpiarNombre() {
    if (this.errorNombre > 0) {
      console.log("Limpiar nombre");
      this.user.nombre = "";
      this.errorNombre = 0;
    }
  }

  limpiarPassword() {
    if (this.errrorPassword > 0) {
      console.log("Limpiar password");
      this.user.password = "";
      this.errrorPassword = 0;
    }
  }

  limpiarRePassword() {
    if (this.errorRePassrword > 0) {
      console.log("Limpiar repassword");
      this.user.repassword = "";
      this.errorRePassrword = 0;
    }

  }

  limpiarEmail() {
    if(this.errorEmail>0){
      console.log("Limpiar email");
      this.user.email = "";
      this.errorEmail = 0;
    }
  }

  
}
