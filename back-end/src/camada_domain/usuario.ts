import { TipoUsuario } from "./tipoUsario";

export class Usuario {

    constructor(
        id: number,
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

    id:number;
    nome:string;
    email:string;
    senha:string;
    tipoUsuario:TipoUsuario;
}
