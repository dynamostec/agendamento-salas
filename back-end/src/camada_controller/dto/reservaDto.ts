import { UsuarioDto } from "./usuarioDto";
import { SalaDto } from "./salaDto";

export class ReservaDto {

    constructor(
        id: string,
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

    private id: string;
    private usuario: UsuarioDto;
    private sala: SalaDto;
    private dataHoraInicio: Date;
    private dataHoraTermino: Date;

    get getId(): string {
        return this.id;
    }

    get getUsuario(): UsuarioDto {
        return this.usuario;
    }

    set setUsuario(value: UsuarioDto) {
        this.usuario = value;
    }

    get getSala(): SalaDto {
        return this.sala;
    }

    set setSala(value: SalaDto) {
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