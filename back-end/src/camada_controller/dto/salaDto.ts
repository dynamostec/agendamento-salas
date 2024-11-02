import { EnderecoDto } from "./enderecoDto";
import { UsuarioDto } from "./usuarioDto";

export class SalaDto {

    constructor(
        id: string,
        nome: string,
        capacidade: number,
        usuarioAdministrador: UsuarioDto,
        localizacao: EnderecoDto,
        descricao: string
    ){
        this.id=id;
        this.nome=nome;
        this.capacidade=capacidade;
        this.usuarioAdministrador = usuarioAdministrador;
        this.localizacao=localizacao;
        this.descricao=descricao;
    }

    id: string;
    nome: string;
    capacidade: number;
    usuarioAdministrador: UsuarioDto;
    localizacao: EnderecoDto;
    descricao: string;

    get _id(): number {
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

    get _localizacao(): EnderecoDto {
        return this.localizacao;
    }

    set _localizacao(value: EnderecoDto) {
        this.localizacao = value;
    }

    get _usuarioAdministrador(): UsuarioDto {
        return this.usuarioAdministrador;
    }

    set _usuarioAdministrador(value: UsuarioDto) {
        this.usuarioAdministrador = value;
    }

    get _descricao(): string {
        return this.descricao;
    }

    set _descricao(value: string) {
        this.descricao = value;
    }
}