import { SubTarea } from "./subTarea";

export interface Tarea {

    id: number;
    nombre: string;
    asignado: string;
    categoria: string;
    porcentaje: number;
    status: string; 
    subTareas: SubTarea[]; 
}