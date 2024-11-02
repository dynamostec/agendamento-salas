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
            domain._rua, 
            domain._cep, 
            domain._cidade, 
            domain._estado
        );
    }

    static paraDto(domain: Endereco): EnderecoDto {
        return new EnderecoDto( 
            domain._rua, 
            domain._cep, 
            domain._cidade, 
            domain._estado
        );
    }

    static paraDomainDeDto(dto: EnderecoDto): Endereco {
        return new Endereco(
            dto.rua, 
            dto.cep, 
            dto.cidade, 
            dto.estado
        );
    }
}