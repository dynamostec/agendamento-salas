import { SalaMapper } from './sala.mapper';
import { UsuarioMapper } from './usuario.mapper';
import { ReservaEntity } from "src/camada_repository/entities/reserva.entity";

export class ReservaMapper {

    constructor(
        private usuarioMapper: UsuarioMapper,
        private salaMapper: SalaMapper
    ){}


    paraDomain(entity: ReservaEntity): Reserva {
        return new Reserva(
            entity.id, 
            this.usuarioMapper.paraDomain(entity.usuario), 
            this.salaMapper.paraDomain(entity.sala),
            entity.dataHoraInicio,
            entity.dataHoraTermino
        );
    }

    paraDomains(entities: Array<ReservaEntity>): Array<Reserva> {
        return entities.map(entity => this.paraDomain(entity));
    }

    paraEntity(domain: Reserva): ReservaEntity {
        return Reserva(
            domain.id, 
            this.usuarioMapper.paraEntity(domain.usuario),
            this.salaMapper.paraEntity(domain.sala),
            domain.dataHoraInicio,
            domain.dataHoraTermino
        );
    }

    paraDto(domain: Reserva): ReservaDto {
        return ReservaDto (
            domain.id, 
            this.usuarioMapper.paraDto(domain.usuario),
            this.salaMapper.paraDto(domain.sala),
            domain.dataHoraInicio,
            domain.dataHoraTermino
        );
    }
 

    paraDtos(domains: Array<Reserva>): Array<ReservaDto> {
        return domains.map(domain => this.paraDto(domain));
    }

    paraDomainDeDto(dto: ReservaDto): Reserva {
        return new Reserva(
            dto.id,
            this.usuarioMapper.paraDomainDeDto(dto.usario),
            this.salaMapper.paraDomainDeDto(dto.sala),
            dto.dataHoraInicio,
            dto.dataHoraTermino
        );
    }
}