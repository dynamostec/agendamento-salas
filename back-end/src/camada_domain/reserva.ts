import { Usuario } from "./usuario";
import { Sala } from "./sala";

export class Reserva {

    constructor(
        id: string,
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

    private id: string;
    private usuario: Usuario;
    private sala: Sala;
    private dataHoraInicio: Date;
    private dataHoraTermino: Date;

    get _id(): string {
        return this.id;
    }

    get _usuario(): Usuario {
        return this.usuario;
    }

    set _usuario(value: Usuario) {
        this.usuario = value;
    }

    get _sala(): Sala {
        return this.sala;
    }

    set _sala(value: Sala) {
        this.sala = value;
    }

    get _dataHoraInicio(): Date {
        return this.dataHoraInicio;
    }

    set _dataHoraInicio(value: Date) {
        this.dataHoraInicio = value;
    }

    get _dataHoraTermino(): Date {
        return this.dataHoraTermino;
    }

    set _dataHoraTermino(value: Date) {
        this.dataHoraTermino = value;
    }
}