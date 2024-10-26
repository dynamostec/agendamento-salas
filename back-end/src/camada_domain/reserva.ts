import { Usuario } from "./usuario";
import { Sala } from "./sala";

export class Reserva {
    id: number;
    usuario: Usuario;
    sala: Sala;
    dataHoraInicial: Date;
    dataHoraFinal: Date;
}