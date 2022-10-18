import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsuariosIngresarComponent } from './components/usuarios-ingresar/usuarios-ingresar.component';
import { UsuariosRegistrarComponent } from './components/usuarios-registrar/usuarios-registrar.component';
import { FormsModule } from '@angular/forms';
import { UsuariosPrincipalComponent } from './components/usuarios-principal/usuarios-principal.component';
import { UsuariosHomeComponent } from './components/usuarios-home/usuarios-home.component'
import { UsuariosService } from './services/usuarios.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AutosAdministrarComponent } from './components/autos-administrar/autos-administrar.component';
import { SlotAdministrarComponent } from './components/slot-administrar/slot-administrar.component';
import { AutosListarComponent } from './components/autos-listar/autos-listar.component';
import { AutosHistorialComponent } from './components/autos-historial/autos-historial.component';
import { AnimalAdministrarComponent } from './components/animal-administrar/animal-administrar.component';
import { UsuariosListarComponent } from './components/usuarios-listar/usuarios-listar.component';
import { AnimalesListarComponent } from './components/animales-listar/animales-listar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AnimalesRegistrarComponent } from './components/animales-registrar/animales-registrar.component';
import { AnimalesInformacionComponent } from './components/animales-informacion/animales-informacion.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxToastNotifierModule } from 'ngx-toast-notifier';
import { FiltroPipe } from './cliente/pipes/filtro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsuariosIngresarComponent,
    UsuariosRegistrarComponent,
    UsuariosPrincipalComponent,
    UsuariosHomeComponent,
    AutosListarComponent,
    AutosAdministrarComponent,
    SlotAdministrarComponent,
    AutosHistorialComponent,
    AnimalAdministrarComponent,
    UsuariosListarComponent,
    AnimalesListarComponent,
    RegistrarComponent,
    AnimalesRegistrarComponent,
    AnimalesInformacionComponent,
    FiltroPipe
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    NgxToastNotifierModule.forRoot(), // NgxToastNotifierModule added
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    
    UsuariosService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
