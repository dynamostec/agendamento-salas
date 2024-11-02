
export class EnderecoDto {
    
    constructor(
        rua: string,
        cep: string,
        cidade: string,
        estado: string
    ){
        this.rua=rua;
        this.cep=cep;
        this.cidade=cidade;
        this.estado=estado;
    }

    private rua: string;
    private cep: string;
    private cidade: string;
    private estado: string;

    getRua(): string {
        return this.rua;
    }

    setRua(value: string) {
        this.rua = value;
    }

    getCep(): string {
        return this.cep;
    }

    setCep(value: string) {
        this.cep = value;
    }

    getCidade(): string {
        return this.cidade;
    }

    setCidade(value: string) {
        this.cidade = value;
    }

    getEstado(): string {
        return this.estado;
    }

    setEstado (value: string) {
        this.estado = value;
    }
}