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

    id:string;
    nome:string;
    email:string;
    senha:string;
    tipoUsuario:TipoUsuario;
}
