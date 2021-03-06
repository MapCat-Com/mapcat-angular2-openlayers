import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MangolModule } from 'mangol';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MangolModule
  ],
  providers: [
    { provide: Window, useValue: window },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
