import { Reserva } from 'src/camada_domain/reserva';
import { SalaMapper } from './sala.mapper';
import { UsuarioMapper } from './usuario.mapper';
import { ReservaEntity } from "src/camada_entities/reserva.entity";
import { ReservaDto } from 'src/camada_controller/dto/reservaDto';

export class ReservaMapper {

    static paraDomain(entity: ReservaEntity): Reserva {
        return new Reserva(
            entity.id, 
            UsuarioMapper.paraDomain(entity.usuario), 
            SalaMapper.paraDomain(entity.sala),
            entity.dataHoraInicio,
            entity.dataHoraTermino
        );
    }

    static paraDomains(entities: Array<ReservaEntity>): Array<Reserva> {
        return entities.map(entity => this.paraDomain(entity));
    }

    static paraEntity(domain: Reserva): ReservaEntity {
        return new ReservaEntity(
            domain.id, 
            UsuarioMapper.paraEntity(domain.usuario),
            SalaMapper.paraEntity(domain.sala),
            domain.dataHoraInicio,
            domain.dataHoraTermino
        );
    }

    static paraDto(domain: Reserva): ReservaDto {
        return new ReservaDto (
            domain.id, 
            UsuarioMapper.paraDto(domain.usuario),
            SalaMapper.paraDto(domain.sala),
            domain.dataHoraInicio,
            domain.dataHoraTermino
        );
    }
 

    static paraDtos(domains: Array<Reserva>): Array<ReservaDto> {
        return domains.map(domain => this.paraDto(domain));
    }

    static paraDomainDeDto(dto: ReservaDto): Reserva {
        return new Reserva(
            dto.id,
            UsuarioMapper.paraDomainDeDto(dto.usuario),
            SalaMapper.paraDomainDeDto(dto.sala),
            dto.dataHoraInicio,
            dto.dataHoraTermino
        );
    }
}