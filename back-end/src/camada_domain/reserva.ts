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

    get getId(): string {
        return this.id;
    }

    get getUsuario(): Usuario {
        return this.usuario;
    }

    set setUsuario(value: Usuario) {
        this.usuario = value;
    }

    get getSala(): Sala {
        return this.sala;
    }

    set setSala(value: Sala) {
        this.sala = value;
    }

    get getDataHoraInicio(): Date {
        return this.dataHoraInicio;
    }

    set setDataHoraInicio(value: Date) {
        this.dataHoraInicio = value;
    }

    get getDataHoraTermino(): Date {
        return this.dataHoraTermino;
    }

    set setDataHoraTermino(value: Date) {
        this.dataHoraTermino = value;
    }
}