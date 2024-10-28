import { TipoUsuario } from "src/camada_domain/tipoUsario";

export class UsuarioDto {

    constructor(
        id: number,
        nome: String,
        email: String,
        senha: String,
        tipoUsuario: TipoUsuario
    ){
        this.id=id,
        this.nome=nome,
        this.email=email,
        this.senha=senha,
        this.tipoUsuario=tipoUsuario
    }

    id: number;
    nome: String;
    email: String;
    senha: String;
    tipoUsuario: TipoUsuario;
} 