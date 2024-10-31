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

    id: string;
    usuario: UsuarioDto;
    sala: SalaDto;
    dataHoraInicio: Date;
    dataHoraTermino: Date;
}