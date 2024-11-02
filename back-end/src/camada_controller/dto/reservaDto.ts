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

    getId(): string {
        return this.id;
    }

    getUsuario(): UsuarioDto {
        return this.usuario;
    }

    setUsuario(value: UsuarioDto) {
        this.usuario = value;
    }

    getSala(): SalaDto {
        return this.sala;
    }

    setSala(value: SalaDto) {
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