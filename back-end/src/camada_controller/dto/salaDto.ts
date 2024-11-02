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

    get getLocalizacao(): EnderecoDto {
        return this.localizacao;
    }

    set setLocalizacao(value: EnderecoDto) {
        this.localizacao = value;
    }

    get getUsuarioAdministrador(): UsuarioDto {
        return this.usuarioAdministrador;
    }

    set setUsuarioAdministrador(value: UsuarioDto) {
        this.usuarioAdministrador = value;
    }

    get getDescricao(): string {
        return this.descricao;
    }

    set setDescricao(value: string) {
        this.descricao = value;
    }
}