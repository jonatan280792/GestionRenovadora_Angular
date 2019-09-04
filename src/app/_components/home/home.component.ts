import { Component, OnInit } from '@angular/core';

import { homeModel, CategoriaVehiculoModel, MarcasVehiculoModel, ModeloVehiculoModel, ListadoFiltrado } from './home.model';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //Modelos de busqueda
  model: homeModel = new homeModel();
  getAllTipos : CategoriaVehiculoModel[] = [];
  modelTipo: CategoriaVehiculoModel = new CategoriaVehiculoModel();

  getAllMarcas : MarcasVehiculoModel[] = [];
  modelMarca: MarcasVehiculoModel = new MarcasVehiculoModel();
  modelsMarca: MarcasVehiculoModel[]; 

  getModelos : ModeloVehiculoModel[] = [];

  getAllBusqueda : ListadoFiltrado[] = [];
  // Parametros de control

  habilitarMarca = false;

  constructor( 
    private homeService : HomeService 
  ) { }


  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

  selectedValue: string;
  selectedCar: string;

  

  ngOnInit() {
    debugger;
    this.loadValores();
  }

  loadValores(){
    this.homeService.GetAllCategorias().subscribe((res: CategoriaVehiculoModel[]) => {
      this.getAllTipos = res;
      debugger;      
    });
    
  }

  onchange(model : CategoriaVehiculoModel){
    console.log("aqui");
    debugger;
    this.homeService.GetMarcas(model.Id).subscribe((res: MarcasVehiculoModel[]) => {
      debugger;
      this.habilitarMarca = true;
      this.getAllMarcas = res;
       
    });
    
  }

  editar(data: any){
    debugger;
  }

}
