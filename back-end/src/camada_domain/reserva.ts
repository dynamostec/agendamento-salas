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

    getId(): string {
        return this.id;
    }

    getUsuario(): Usuario {
        return this.usuario;
    }

    setUsuario(value: Usuario) {
        this.usuario = value;
    }

    getSala(): Sala {
        return this.sala;
    }

    setSala(value: Sala) {
        this.sala = value;
    }

    getDataHoraInicio(): Date {
        return this.dataHoraInicio;
    }

    setDataHoraInicio(value: Date) {
        this.dataHoraInicio = value;
    }

    getDataHoraTermino(): Date {
        return this.dataHoraTermino;
    }

    setDataHoraTermino(value: Date) {
        this.dataHoraTermino = value;
    }
}