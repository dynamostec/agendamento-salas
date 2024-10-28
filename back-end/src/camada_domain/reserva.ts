import { Usuario } from "./usuario";
import { Sala } from "./sala";

export class Reserva {

    constructor(
        id: number,
        usuario: Usuario,
        sala: Sala,
        dataHoraInicial: Date,
        dataHoraTermino: Date
    ) {
        this.id = id;
        this.usuario = usuario;
        this.sala = sala;
        this.dataHoraInicial = dataHoraInicial;
        this.dataHoraTermino = dataHoraTermino;
    }

    id: number;
    usuario: Usuario;
    sala: Sala;
    dataHoraInicial: Date;
    dataHoraTermino: Date;
}