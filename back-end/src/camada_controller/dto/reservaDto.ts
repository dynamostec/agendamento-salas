import { UsuarioDto } from "./usuarioDto";
import { SalaDto } from "./salaDto";

export class ReservaDto {
    id: number;
    usuario: UsuarioDto;
    sala: SalaDto;
    dataHoraInicio: Date;
    dataHoraTermino: Date;
}