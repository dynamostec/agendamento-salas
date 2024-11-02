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

    private id: string;
    private nome: string;
    private capacidade: number;
    private usuarioAdministrador: UsuarioDto;
    private localizacao: EnderecoDto;
    private descricao: string;

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

    getLocalizacao(): EnderecoDto {
        return this.localizacao;
    }

    setLocalizacao(value: EnderecoDto) {
        this.localizacao = value;
    }

    getUsuarioAdministrador(): UsuarioDto {
        return this.usuarioAdministrador;
    }

    setUsuarioAdministrador(value: UsuarioDto) {
        this.usuarioAdministrador = value;
    }

    getDescricao(): string {
        return this.descricao;
    }

    setDescricao(value: string) {
        this.descricao = value;
    }
}