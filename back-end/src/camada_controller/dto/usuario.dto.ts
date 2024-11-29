import { Put } from '@nestjs/common';
import { TipoUsuario } from "src/camada_domain/tipoUsario";
import { IsEnum } from 'class-validator';

export class UsuarioDto {

    constructor(
        id: string,
        nome: string,
        email: string,
        senha: string,
        tipoUsuario: TipoUsuario
    ){
        this.id=id;
        this.nome=nome;
        this.email=email;
        this.senha=senha;
        this.tipoUsuario=tipoUsuario;
    }

    id: string;
    nome: string;
    email: string;
    senha: string;
    @IsEnum(['admin', 'user'])
    tipoUsuario: TipoUsuario;
} 