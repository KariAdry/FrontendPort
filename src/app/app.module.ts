import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import {HttpClientModule} from '@angular/common/http';
import { EducacionComponent } from './components/educacion/educacion.component';
import { InterceptorProvider } from './service/interceptor-service';
import { NuevaExperienciaComponent } from './components/experiencia-laboral/nueva-experiencia.component';
import { EdicionExperienciaComponent } from './components/experiencia-laboral/edicion-experiencia.component';
import { NuevaInstruccionComponent } from './components/educacion/nueva-instruccion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { EditconocComponent } from './components/conocimientos/editconoc/editconoc.component';
import { NuevoConocComponent } from './components/conocimientos/nuevo-conoc/nuevo-conoc.component';


@NgModule({

  declarations: [
    AppComponent,
    BannerComponent,
    ExperienciaLaboralComponent,
    AcercaDeComponent,
    ProyectosComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    PortfolioComponent,
    EducacionComponent,
    NuevaExperienciaComponent,
    EdicionExperienciaComponent,
    NuevaInstruccionComponent,
    EditarEducacionComponent,
    ConocimientosComponent,
    EditconocComponent,
  	NuevoConocComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
       
  ],
  providers: [InterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
