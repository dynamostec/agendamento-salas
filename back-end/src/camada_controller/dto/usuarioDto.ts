import { TipoUsuario } from "src/camada_domain/tipoUsario";

export class UsuarioDto {

    constructor(
        id: string,
        nome: string,
        email: string,
        senha: string,
        tipoUsuario: TipoUsuario
    ){
        this.id=id;
        this.nome=nome;
        this.email=email;
        this.senha=senha;
        this.tipoUsuario=tipoUsuario;
    }

    id: string;
    nome: string;
    email: string;
    senha: string;
    tipoUsuario: TipoUsuario;
} 