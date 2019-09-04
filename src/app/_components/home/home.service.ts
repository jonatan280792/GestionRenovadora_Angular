import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { homeModel, CategoriaVehiculoModel, MarcasVehiculoModel, ModeloVehiculoModel, ListadoFiltrado } from './home.model';
import { ResultModel } from 'src/app/_models/result.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private serviceUrl = environment.serviceUrl + 'api/categorias';
  private serviceUrlMarcas = environment.serviceUrl + 'api/marcas';
  private serviceUrlModelo = environment.serviceUrl + 'api/modelo';

  private serviceUrlBusqueda = environment.serviceUrl + 'api/catalogocarros';

  constructor(private http: HttpClient) { }

  GetAllCategorias(): Observable<CategoriaVehiculoModel[]> {
    return this.http.get<CategoriaVehiculoModel[]>(this.serviceUrl);
  }
  GetAllMarcas(): Observable<MarcasVehiculoModel[]> {
    return this.http.get<MarcasVehiculoModel[]>(this.serviceUrlMarcas);
  }
  GetMarcas(id: number): Observable<MarcasVehiculoModel[]> {
    return this.http.get<MarcasVehiculoModel[]>(this.serviceUrlMarcas + "/" + id);
  }
  GetAllModelos(): Observable<ModeloVehiculoModel[]> {
    return this.http.get<ModeloVehiculoModel[]>(this.serviceUrlModelo);
  }
  GetModelos(id_modelo: number): Observable<ModeloVehiculoModel[]> {    
    return this.http.get<ModeloVehiculoModel[]>(this.serviceUrlModelo + "/" + id_modelo);
  }

  GetListFilters(model: homeModel): Observable<ListadoFiltrado[]> {
    return this.http.get<ListadoFiltrado[]>(this.serviceUrlBusqueda + "?IdCategoria=" + model.IdCategoria + "&IdMarca=" + model.IdMarca +
            "&Id_Modelo=" + model.IdModelo);
  }
}
