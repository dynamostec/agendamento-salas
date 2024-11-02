import { UsuarioDto } from "src/camada_controller/dto/usuarioDto";
import { Usuario } from "src/camada_domain/usuario";
import { UsuarioEntity } from "src/camada_entities/usuario.entity";

export class UsuarioMapper {

    static paraDomain(entity: UsuarioEntity): Usuario {
        return new Usuario(
            entity.id, 
            entity.nome, 
            entity.email, 
            entity.senha, 
            entity.tipoUsuario
        );
    }

    static paraEntity(domain: Usuario): UsuarioEntity {
        return new UsuarioEntity(
            domain._id, 
            domain._nome, 
            domain._email, 
            domain._senha, 
            domain._tipoUsuario
        );
    }

    static paraDto(domain: Usuario): UsuarioDto {
        return new UsuarioDto(
            domain._id, 
            domain._nome, 
            domain._email, 
            domain._senha, 
            domain._tipoUsuario
        );
    }

    static paraDomainDeDto(dto: UsuarioDto): Usuario {
        return new Usuario(
            dto.id, 
            dto.nome, 
            dto.email, 
            dto.senha, 
            dto.tipoUsuario
        );
    }
}