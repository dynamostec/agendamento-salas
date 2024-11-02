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

    getId(): string {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(value: string) {
        this.nome = value;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(value: string) {
        this.email = value;
    }

    getSenha(): string {
        return this.senha;
    }

    setSenha(value: string) {
        this.senha = value;
    }

    getTipoUsuario(): TipoUsuario {
        return this.tipoUsuario;
    }

    setTipoUsuario(value: TipoUsuario) {
        this.tipoUsuario = value;
    }
}
