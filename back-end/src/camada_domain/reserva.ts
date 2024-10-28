import { Usuario } from "./usuario";
import { Sala } from "./sala";

export class Reserva {

    constructor(
        id: number,
        usuario: Usuario,
        sala: Sala,
        dataHoraInicio: Date,
        dataHoraTermino: Date
    ) {
        this.id = id;
        this.usuario = usuario;
        this.sala = sala;
        this.dataHoraInicio = dataHoraInicio;
        this.dataHoraTermino = dataHoraTermino;
    }

    id: number;
    usuario: Usuario;
    sala: Sala;
    dataHoraInicio: Date;
    dataHoraTermino: Date;
}