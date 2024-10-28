import { UsuarioDto } from "src/camada_controller/dto/usuarioDto";
import { Usuario } from "src/camada_domain/usuario";
import { UsuarioEntity } from "src/camada_repository/entities/usuario.entity";

export class UsuarioMapper {

    paraDomain(entity: UsuarioEntity): Usuario {
        return new Usuario(
            entity.id, 
            entity.nome, 
            entity.email, 
            entity.senha, 
            entity.tipoUsuario
        );
    }

    paraEntity(domain: Usuario): UsuarioEntity {
        return new UsuarioEntity(
            domain.id, 
            domain.nome, 
            domain.email, 
            domain.senha, 
            domain.tipoUsuario
        );
    }

    paraDto(domain: Usuario): UsuarioDto {
        return new UsuarioDto(
            domain.id, 
            domain.nome, 
            domain.email, 
            domain.senha, 
            domain.tipoUsuario
        );
    }

    paraDomainDeDto(dto: UsuarioDto): Usuario {
        return new Usuario(
            dto.id, 
            dto.nome, 
            dto.email, 
            dto.senha, 
            dto.tipoUsuario
        );
    }
}