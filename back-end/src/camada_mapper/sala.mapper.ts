import { SalaEntity } from "src/camada_entities/sala.entity";
import { UsuarioEntity } from "src/camada_entities/usuario.entity";
import { UsuarioMapper } from "./usuario.mapper";
import { Sala } from "src/camada_domain/sala";
import { SalaDto } from "src/camada_controller/dto/sala.dto";
import { EnderecoMapper } from "./endereco.mapper";

export class SalaMapper {

    static paraDomain(entity: SalaEntity): Sala {
        return new Sala(
            entity.id, 
            entity.nome, 
            entity.capacidade, 
            EnderecoMapper.paraDomain(entity.localizacao), 
            UsuarioMapper.paraDomain(entity.usuarioAdministrador),
            entity.descricao
        );
    }

    static paraDoamains(entities: Array<SalaEntity>): Array<Sala> {
        return entities.map(entity => this.paraDomain(entity));
    }

    static paraEntity(domain: Sala): SalaEntity {
        return new SalaEntity(
            domain.getId(), 
            domain.getNome(), 
            domain.getCapacidade(), 
            EnderecoMapper.paraEntity(domain.getLocalizacao()), 
            UsuarioMapper.paraEntity(domain.getUsuarioAdministrador()),
            domain.getDescricao()
        );
    }

    static paraDto(domain: Sala): SalaDto {
        return new SalaDto(
            domain.getId(), 
            domain.getNome(), 
            domain.getCapacidade(), 
            UsuarioMapper.paraDto(domain.getUsuarioAdministrador()),
            EnderecoMapper.paraDto(domain.getLocalizacao()), 
            domain.getDescricao()
        );
    }
    
    static paraDtos(domains: Array<Sala>): Array<SalaDto> {
        return domains.map(domain => this.paraDto(domain));
    }

    static paraDomainDeDto(dto: SalaDto): Sala {
        console.log(dto);
        
        return new Sala(
            dto.id, 
            dto.nome, 
            dto.capacidade, 
            EnderecoMapper.paraDomainDeDto(dto.localizacao), 
            UsuarioMapper.paraDomainDeDto(dto.usuarioAdministrador),
            dto.descricao
        );
    }
}