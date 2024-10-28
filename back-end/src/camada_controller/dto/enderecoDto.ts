
export class EnderecoDto {
    
    constructor(
        rua: String,
        cep: String,
        cidade: String,
        estado: String
    ){
        this.rua=rua,
        this.cep=cep,
        this.cidade=cidade,
        this.estado=estado
    }
    rua: String;
    cep: String;
    cidade: String;
    estado: String;
}