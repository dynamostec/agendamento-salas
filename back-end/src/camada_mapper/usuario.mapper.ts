import { UsuarioDto } from "src/camada_controller/dto/usuario.dto";
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
            domain.getId(), 
            domain.getNome(), 
            domain.getEmail(), 
            domain.getSenha(), 
            domain.getTipoUsuario()
        );
    }

    static paraDto(domain: Usuario): UsuarioDto {
        return new UsuarioDto(
            domain.getId(), 
            domain.getNome(), 
            domain.getEmail(), 
            domain.getSenha(), 
            domain.getTipoUsuario()
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