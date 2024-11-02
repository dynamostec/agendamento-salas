
export class Endereco {

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

    private rua: string;
    private cep: string;
    private cidade: string;
    private estado: string;

    get getRua(): string {
        return this.rua;
    }

    set setRua(value: string) {
        this.rua = value;
    }

    get getCep(): string {
        return this.cep;
    }

    set setCep(value: string) {
        this.cep = value;
    }

    get getCidade(): string {
        return this.cidade;
    }

    set setCidade(value: string) {
        this.cidade = value;
    }

    get getEstado(): string {
        return this.estado;
    }

    set setEstado (value: string) {
        this.estado = value;
    }
}