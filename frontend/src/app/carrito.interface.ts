export interface ItemCarrito {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
    imagen?: string;       
    stockDisponible: number;
  }