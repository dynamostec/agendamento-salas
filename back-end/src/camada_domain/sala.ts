import { notEqual } from "assert";
import { Endereco } from "./endereco";
import { Usuario } from "./usuario";

export class Sala {

    constructor(
        id: string,
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

    id: string;
    nome: string;
    capacidade: number;
    localizacao: Endereco;
    usuarioAdministrador: Usuario;
    descricao: string;

    alterarDados(novosDados: Sala) {
        this.nome = novosDados.nome;
        this.capacidade = novosDados.capacidade;
        this.localizacao = novosDados.localizacao;
        this.descricao = novosDados.descricao;
    }
}

