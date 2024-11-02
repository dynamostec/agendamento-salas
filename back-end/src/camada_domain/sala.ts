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

    get getId(): string {
        return this.id;
    }

    get getNome(): string {
        return this.nome;
    }

    set setNome(value: string) {
        this.nome = value;
    }

    get getCapacidade(): number {
        return this.capacidade;
    }

    set setCapacidade(value: number) {
        this.capacidade = value;
    }

    get getLocalizacao(): Endereco {
        return this.localizacao;
    }

    set setLocalizacao(value: Endereco) {
        this.localizacao = value;
    }

    get getUsuarioAdministrador(): Usuario {
        return this.usuarioAdministrador;
    }

    set setUsuarioAdministrador(value: Usuario) {
        this.usuarioAdministrador = value;
    }

    get getDescricao(): string {
        return this.descricao;
    }

    set setDescricao(value: string) {
        this.descricao = value;
    }
}