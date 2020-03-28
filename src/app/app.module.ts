import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaFormularioComponent } from './vista-formulario/vista-formulario.component';
import { FormularioExtrasComponent } from './formulario-extras/formulario-extras.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaFormularioComponent,
    FormularioExtrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
