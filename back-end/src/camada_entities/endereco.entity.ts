import { Column } from "typeorm";

export class EnderecoEntity {

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

    @Column({ nullable: false })
    rua: string;

    @Column({ nullable: false })
    cep: string;

    @Column({ nullable: false }) 
    cidade: string;

    @Column({ nullable: false })
    estado: string;
}