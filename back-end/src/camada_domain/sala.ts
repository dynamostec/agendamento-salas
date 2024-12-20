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
    private nome: string;
    private capacidade: number;
    private localizacao: Endereco;
    private usuarioAdministrador: Usuario;
    private descricao: string;

    alterarDados(novosDados: Sala) {
        this.nome = novosDados.nome;
        this.capacidade = novosDados.capacidade;
        this.localizacao = novosDados.localizacao;
        this.usuarioAdministrador = novosDados.usuarioAdministrador;
        this.descricao = novosDados.descricao;
    }

    getId(): string {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(value: string) {
        this.nome = value;
    }

    getCapacidade(): number {
        return this.capacidade;
    }

    setCapacidade(value: number) {
        this.capacidade = value;
    }

    getLocalizacao(): Endereco {
        return this.localizacao;
    }

    setLocalizacao(value: Endereco) {
        this.localizacao = value;
    }

    getUsuarioAdministrador(): Usuario {
        return this.usuarioAdministrador;
    }

    setUsuarioAdministrador(value: Usuario) {
        this.usuarioAdministrador = value;
    }

    getDescricao(): string {
        return this.descricao;
    }

    setDescricao(value: string) {
        this.descricao = value;
    }
}