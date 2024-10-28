import { notEqual } from "assert";
import { Endereco } from "./endereco";
import { Usuario } from "./usuario";

export class Sala {

    constructor(
        id: number,
        nome: string,
        capacidade: number,
        localizacao: Endereco,
        usuarioAdministrador: Usuario,
        descricao: string
    ) {
        this.id = id;
        this.nome = nome;
        this.capacidade = capacidade;
        this.localizacao = localizacao;
        this.usuarioAdministrador = usuarioAdministrador;
        this.descricao = descricao;
    }

    id: number;
    nome: string;
    capacidade: number;
    localizacao: Endereco;
    usuarioAdministrador: Usuario;
    descricao: string;
}

