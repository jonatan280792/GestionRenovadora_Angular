import { Component, OnInit } from '@angular/core';

import { AdminModel } from './admin.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  model: AdminModel = new AdminModel();
  models: AdminModel[] = [];

  //Parametros globales
  isAutentic = false;

  constructor() { }

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios(){
    this.models = [
      {Id : 1, UserName : 'admin', PassWord : 'Admin2018'},
      {Id : 1, UserName : 'invitado', PassWord : 'Admin2018'},
      {Id : 1, UserName : 'regional', PassWord : 'Admin2018'},
      {Id : 1, UserName : 'zona', PassWord : 'Admin2018'}
    ];
  }

  login(data : AdminModel){
    debugger;
    var resultado = this.models.find(x => x.UserName === this.model.UserName && x.PassWord === this.model.PassWord);
    if(!resultado){
      alert('Usuario y/o contraseña incorrecto');
    }
    else{
      this.isAutentic = true;
    }
  }

}
