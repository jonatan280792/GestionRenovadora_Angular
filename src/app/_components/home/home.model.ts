export class homeModel {
    constructor(        
        public IdCategoria?: number,
        public Categoria?: string,
        public IdMarca?: number,
        public Marca?: string,
        public IdModelo?: number,
        public Modelo?: string,
        public PRECIOINICIAL: PrecioInicialModel[] = [],
        public PRECIOFINAL: PrecioFinalModel[] = [],
        public AÑODESDE: AñoDesdeModel[] = [],
        public AÑOHASTA: AñoHastaModel[] = [],
    ) { }
}

export class CategoriaVehiculoModel {
    constructor (
        public Id?: number,
        public Type?: string,
        public Categoria?: string,
        public Estado?: boolean,
    ){ }
}

export class MarcasVehiculoModel {
    constructor (
        public Id_Marca?: number,
        public Marca?: string,
        public Id_Code?: string,
        public Type?: number,
        public Estado?: boolean
    ){ }
}

export class ModeloVehiculoModel {
    constructor (
        public Id_Modelo?: number,
        public Modelo?: string,
        public Tipo?: number,
        public Estado?: boolean
    ){ }
}

export class PrecioInicialModel {
    constructor (
        public ID_PRECIO?: number,
        public PRECIO?: string
    ){ }
}

export class PrecioFinalModel {
    constructor (
        public ID_PRECIO?: number,
        public PRECIO?: string
    ){ }
}

export class AñoDesdeModel {
    constructor (
        public ID_BRAND?: number,
        public BRAND?: string
    ){ }
}

export class AñoHastaModel {
    constructor (
        public ID_BRAND?: number,
        public BRAND?: string
    ){ }
}

export class ListadoFiltrado {
    constructor (
        public Id?: number,
        public User?: string,
        public Departamento_Id?: number,
        public Departamento?: string,
        public Ciudad_Id?: number,
        public Ciudad?: string,
        public Marca_Id?: number,
        public Marca?: string,
        public Modelo_Id?: number,
        public Modelo?: string,
        public Precio?: number,
        public Kilometraje?: number,
        public Version?: number,
        public car_Image_Uno?: string,
        public car_Image_Dos?: string,
        public car_Image_Tres?: string,
        public car_Image_Cuatro?: string,
        public car_Image_Cinco?: string,
    ){ }
}