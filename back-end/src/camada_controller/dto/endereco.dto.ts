
export class EnderecoDto {

    constructor(
        rua: string,
        cep: string,
        cidade: string,
        estado: string
    ) {
        this.rua = rua;
        this.cep = cep;
        this.cidade = cidade;
        this.estado = estado;
    }

    rua: string;
    cep: string;
    cidade: string;
    estado: string;
}