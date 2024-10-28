import { EnderecoDto } from "./enderecoDto";

export class SalaDto {

    constructor(
        id: number,
        nome: String,
        capacidade: number,
        localizacao: EnderecoDto,
        descricao: String
    ){
        this.id=id,
        this.nome=nome,
        this.capacidade=capacidade,
        this.localizacao=localizacao,
        this.descricao=descricao
    }

    id: number;
    nome: String;
    capacidade: number;
    localizacao: EnderecoDto;
    descricao: String;
}