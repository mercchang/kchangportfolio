import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeNGModule } from '../app/PrimeNG.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
