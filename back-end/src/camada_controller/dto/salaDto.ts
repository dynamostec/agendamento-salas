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
}