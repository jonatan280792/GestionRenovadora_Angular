
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule, ModalModule, PopoverModule, TooltipModule, ButtonsModule, WavesModule } from 'angular-bootstrap-md';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/primeng';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptorProvider, TokenInterceptorProvider } from './_interceptors';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ModalModule,
    TooltipModule,
    PopoverModule,
    ButtonsModule,
    NgSelectModule,
    FormsModule,
    ToastModule,    

    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [
    MessageService,
    TokenInterceptorProvider,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
    