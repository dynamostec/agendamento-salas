
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

    get _rua(): string {
        return this.rua;
    }

    set _rua(value: string) {
        this.rua = value;
    }

    get _cep(): string {
        return this.cep;
    }

    set _cep(value: string) {
        this.cep = value;
    }

    get _cidade(): string {
        return this.cidade;
    }

    set _cidade(value: string) {
        this.cidade = value;
    }

    get _estado(): string {
        return this.estado;
    }

    set _estado (value: string) {
        this.estado = value;
    }
}