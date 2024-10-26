import { EnderecoDto } from "./enderecoDto";

export class SalaDto {
    id: number;
    nome: String;
    capacidade: number;
    localizacao: EnderecoDto;
    descricao: String;
}