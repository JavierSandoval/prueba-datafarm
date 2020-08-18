export class Trabajador{

    constructor(
        public id_trabajador: number,
        public nombre_trabajador: string,
        public apellido_trabajador: string,
        public telefono_trabajador: string,
        public cargo: string,
        public salario: number
    ){}
}