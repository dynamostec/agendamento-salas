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
    
    get _id(): number {
        return this.id;
    }

    get _nome(): string {
        return this.nome;
    }

    set _nome(value: string) {
        this.nome = value;
    }

    get _email(): string {
        return this.email;
    }

    set _email(value: string) {
        this.email = value;
    }

    get _senha(): string {
        return this.senha;
    }

    set _senha(value: string) {
        this.senha = value;
    }

    get _tipoUsuario(): TipoUsuario {
        return this.tipoUsuario;
    }

    set _tipoUsuario(value: TipoUsuario) {
        this.tipoUsuario = value;
    }
} 