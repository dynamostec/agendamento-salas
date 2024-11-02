import { EnderecoDto } from "src/camada_controller/dto/enderecoDto";
import { Endereco } from "src/camada_domain/endereco";
import { EnderecoEntity } from "src/camada_entities/endereco.entity";

export class EnderecoMapper {
    static paraDomain(entity: EnderecoEntity): Endereco {
        return new Endereco( 
            entity.rua, 
            entity.cep, 
            entity.cidade, 
            entity.estado
        );
    }

    static paraEntity(domain: Endereco): EnderecoEntity {
        return new EnderecoEntity(
            domain.getRua(), 
            domain.getCep(), 
            domain.getCidade(), 
            domain.getEstado()
        );
    }

    static paraDto(domain: Endereco): EnderecoDto {
        return new EnderecoDto( 
            domain.getRua(), 
            domain.getCep(), 
            domain.getCidade(), 
            domain.getEstado()
        );
    }

    static paraDomainDeDto(dto: EnderecoDto): Endereco {
        return new Endereco(
            dto.getRua(), 
            dto.getCep(), 
            dto.getCidade(), 
            dto.getEstado()
        );
    }
}