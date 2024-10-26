import { TipoUsuario } from "src/camada_domain/tipoUsario";

export class UsuarioDto {
    id: number;
    nome: String;
    email: String;
    senha: String;
    tipoUsuario: TipoUsuario;
} 