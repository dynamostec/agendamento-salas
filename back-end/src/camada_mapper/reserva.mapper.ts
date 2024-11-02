import { Reserva } from 'src/camada_domain/reserva';
import { SalaMapper } from './sala.mapper';
import { UsuarioMapper } from './usuario.mapper';
import { ReservaEntity } from "src/camada_entities/reserva.entity";
import { ReservaDto } from 'src/camada_controller/dto/reservaDto';

export class ReservaMapper {

    static paraDomain(entity: ReservaEntity): Reserva {
        return new Reserva(
            entity.getId, 
            UsuarioMapper.paraDomain(entity.getUsuario), 
            SalaMapper.paraDomain(entity.getSala),
            entity.getDataHoraInicio,
            entity.getDataHoraTermino
        );
    }

    static paraDomains(entities: Array<ReservaEntity>): Array<Reserva> {
        return entities.map(entity => this.paraDomain(entity));
    }

    static paraEntity(domain: Reserva): ReservaEntity {
        return new ReservaEntity(
            domain.getId, 
            UsuarioMapper.paraEntity(domain.getUsuario),
            SalaMapper.paraEntity(domain.getSala),
            domain.getDataHoraInicio,
            domain.getDataHoraTermino
        );
    }

    static paraDto(domain: Reserva): ReservaDto {
        return new ReservaDto (
            domain.getId, 
            UsuarioMapper.paraDto(domain.getUsuario),
            SalaMapper.paraDto(domain.getSala),
            domain.getDataHoraInicio,
            domain.getDataHoraTermino
        );
    }
 

    static paraDtos(domains: Array<Reserva>): Array<ReservaDto> {
        return domains.map(domain => this.paraDto(domain));
    }

    static paraDomainDeDto(dto: ReservaDto): Reserva {
        return new Reserva(
            dto.getId,
            UsuarioMapper.paraDomainDeDto(dto.getUsuario),
            SalaMapper.paraDomainDeDto(dto.getSala),
            dto.getDataHoraInicio,
            dto.getDataHoraTermino
        );
    }
}