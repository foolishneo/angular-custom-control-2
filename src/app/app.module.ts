import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatInputModule,
    MatFormFieldModule, 
    MatButtonModule,
    MatSelectModule
  ],
  declarations: [ AppComponent, VehicleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
