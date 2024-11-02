import { TipoUsuario } from "./tipoUsario";

export class Usuario {

    constructor(
        id: string,
        nome: string,
        email: string,
        senha: string,
        tipoUsuario: TipoUsuario
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.tipoUsuario = tipoUsuario;
    }

    private id:string;
    private nome:string;
    private email:string;
    private senha:string;
    private tipoUsuario:TipoUsuario;

    get _id(): string {
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
