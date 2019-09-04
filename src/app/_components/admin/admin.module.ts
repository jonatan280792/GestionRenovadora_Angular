import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MDBBootstrapModule, ModalModule, PopoverModule, TooltipModule, ButtonsModule, WavesModule,
         InputsModule, InputUtilitiesModule
        } from 'angular-bootstrap-md';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MDBBootstrapModule.forRoot(),
    ModalModule,
    PopoverModule,
    TooltipModule,
    ButtonsModule,
    WavesModule,
    FormsModule,
    InputsModule,
    InputUtilitiesModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
