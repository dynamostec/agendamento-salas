import { UsuarioDto } from "./usuarioDto";
import { SalaDto } from "./salaDto";

export class ReservaDto {

    constructor(
        id: number,
        usuario: UsuarioDto,
        sala: SalaDto,
        dataHoraInicio: Date,
        dataHoraTermino: Date,
    ){
        this.id= id;
        this.usuario=usuario;
        this.sala= sala;
        this.dataHoraInicio= dataHoraInicio;
        this.dataHoraTermino= dataHoraTermino;
    }

    id: number;
    usuario: UsuarioDto;
    sala: SalaDto;
    dataHoraInicio: Date;
    dataHoraTermino: Date;

    get _id(): number {
        return this.id;
    }

    get _usuario(): UsuarioDto {
        return this.usuario;
    }

    set _usuario(value: UsuarioDto) {
        this.usuario = value;
    }

    get _sala(): SalaDto {
        return this.sala;
    }

    set _sala(value: SalaDto) {
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