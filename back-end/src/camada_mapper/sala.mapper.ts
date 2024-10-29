import { SalaEntity } from "src/camada_repository/entities/sala.entity";
import { UsuarioEntity } from "src/camada_repository/entities/usuario.entity";
import { UsuarioMapper } from "./usuario.mapper";
import { Sala } from "src/camada_domain/sala";
import { SalaDto } from "src/camada_controller/dto/salaDto";

export class SalaMapper {

    constructor(private usuariomapper: UsuarioMapper){}

    static paraDomain(entity: SalaEntity): Sala {
        return new Sala(
            entity.id, 
            entity.nome, 
            entity.capacidade, 
            entity.localizacao, 
            UsuarioMapper.paraDomain(entity.usuarioAdministrador),
            entity.descricao
        );
    }

    static paraDoamains(entities: Array<SalaEntity>): Array<Sala> {
        return entities.map(entity => this.paraDomain(entity));
    }

    paraEntity(domain: Sala): SalaEntity {
        return new SalaEntity(
            domain.id, 
            domain.nome, 
            domain.capacidade, 
            domain.localizacao, 
            this.usuariomapper.paraEntity(domain.usuarioAdministrador),
            domain.descricao
        );
    }

    paraDto(domain: Sala): SalaDto {
        return new SalaDto(
            domain.id, 
            domain.nome, 
            domain.capacidade, 
            this.usuariomapper.paraDto(domain.usuarioAdministrador),
            domain.localizacao, 
            domain.descricao
        );
    }
    
    
    paraDtos(domains: Array<Sala>): Array<SalaDto> {
        return domains.map(domain => this.paraDto(domain));
    }

    paraDomainDeDto(dto: SalaDto): Sala {
        return new Sala(
            dto.id, 
            dto.nome, 
            dto.capacidade, 
            dto.localizacao, 
            this.usuariomapper.paraDomainDeDto(dto.usuarioAdministrador),
            dto.descricao
        );
    }
}