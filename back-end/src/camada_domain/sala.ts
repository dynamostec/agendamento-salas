import { notEqual } from "assert";
import { Endereco } from "./endereco";
import { Usuario } from "./usuario";

export class Sala {
    alterarDados(novosDados: Sala) {
        throw new Error('Method not implemented.');
    }

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

    private id: string;
    private nome: string;
    private capacidade: number;
    private localizacao: Endereco;
    private usuarioAdministrador: Usuario;
    private descricao: string;

    get _id(): string {
        return this.id;
    }

    get _nome(): string {
        return this.nome;
    }

    set _nome(value: string) {
        this.nome = value;
    }

    get _capacidade(): number {
        return this.capacidade;
    }

    set _capacidade(value: number) {
        this.capacidade = value;
    }

    get _localizacao(): Endereco {
        return this.localizacao;
    }

    set _localizacao(value: Endereco) {
        this.localizacao = value;
    }

    get _usuarioAdministrador(): Usuario {
        return this.usuarioAdministrador;
    }

    set _usuarioAdministrador(value: Usuario) {
        this.usuarioAdministrador = value;
    }

    get _descricao(): string {
        return this.descricao;
    }

    set _descricao(value: string) {
        this.descricao = value;
    }
}