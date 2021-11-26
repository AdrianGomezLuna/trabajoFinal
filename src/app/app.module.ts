import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponent } from './view/nuevo/nuevo.component';
import { EmpleadosComponent } from './view/empleados/empleados.component';
import { FooterComponent } from './feature/components/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { HeaderComponent } from './feature/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NuevoComponent,
    EmpleadosComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
