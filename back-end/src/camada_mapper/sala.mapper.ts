import { SalaEntity } from "src/camada_repository/entities/sala.entity";
import { UsuarioEntity } from "src/camada_repository/entities/usuario.entity";
import { UsuarioMapper } from "./usuario.mapper";

export class SalaMapper {

    constructor(private usuariomapper: UsuarioMapper){}

    paraDomain(entity: SalaEntity): Sala {
        return new Sala(
            entity.id, 
            entity.nome, 
            entity.capacidade, 
            this.usuariomapper.paraDomain(entity.usuarioAdministrador),
            entity.localizacao, 
            entity.descricao
        );
    }

    paraDoamains(entities: Array<SalaEntity>): Array<Sala> {
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
            domain.localizacao, 
            this.paraDto(domain.usuarioAdministrador),
            domain.descricao
        );
    }
    
    
    paraDtos(domains: Array<Sala>): Array<SalaDto> {
        return domains.map(domain => this.paraDto(domain));
    }

    paraDomainDeDto(dto: SalaDto): Sala {
        return Sala(
            dto.id, 
            dto.nome, 
            dto.capacidade, 
            dto.localizacao, 
            this.usuariomapper.paraDomainDeDto(dto.usuarioAdministrador),
            dto.descricao
        );
    }
}