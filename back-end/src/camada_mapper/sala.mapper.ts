import { SalaEntity } from "src/camada_repository/entities/sala.entity";

export class SalaMapper {

    paraDomain(entity: SalaEntity): Sala {
        return new Sala(entity.id, entity.nome, entity.capacidade, entity.localizacao, entity.descricao);
    }

    paraDoamains(entities: Array<SalaEntity>): Array<Sala> {
        return entities.map(entity => this.paraDomain(entity));
    }

    paraEntity(domain: Sala): SalaEntity {
        return new SalaEntity(domain.id, domain.nome, domain.capacidade, domain.localizacao, domain.descricao);
    }

    paraDto(domain: Sala): SalaDto {
        return new SalaDto(domain.id, domain.nome, domain.capacidade, domain.localizacao, domain.descricao);
    }
    
    
    paraDtos(domains: Array<Sala>): Array<SalaDto> {
        return domains.map(domain => this.paraDto(domain));
    }

    paraDomainDeDto(dto: SalaDto): Sala {
        return Sala(dto.id, dto.nome, dto.capacidade, dto.localizacao, dto.descricao);
    }
}