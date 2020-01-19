import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { StartsComponent } from './componentes/starts/starts.component';

import { RatingModule } from 'ngx-bootstrap';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ServicesService } from "./servicios/services.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    CommonModule, 
    BrowserAnimationsModule,
    RatingModule.forRoot()
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
