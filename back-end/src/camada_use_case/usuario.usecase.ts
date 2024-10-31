import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TipoUsuario } from "src/camada_domain/tipoUsario";
import { Usuario } from "src/camada_domain/usuario";
import { UsuarioMapper } from "src/camada_mapper/usuario.mapper";
import { UsuarioEntity } from "src/camada_repository/entities/usuario.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsuarioUseCase {
    
    constructor(
        @InjectRepository(UsuarioEntity)
        private repository: Repository<UsuarioEntity>
    ){}
    
    async consultarPorId(id: string): Promise<Usuario> {
        return await this.repository.findOne({where: {id}});
    }

    async cadastrar(novoUsuario: Usuario): Promise<Usuario> {
        return await this.repository.save(UsuarioMapper.paraEntity(novoUsuario));
    }


}