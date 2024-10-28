import { Reserva } from 'src/camada_domain/reserva';
import { SalaMapper } from './sala.mapper';
import { UsuarioMapper } from './usuario.mapper';
import { ReservaEntity } from "src/camada_repository/entities/reserva.entity";
import { ReservaDto } from 'src/camada_controller/dto/reservaDto';

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
        return new ReservaEntity(
            domain.id, 
            this.usuarioMapper.paraEntity(domain.usuario),
            this.salaMapper.paraEntity(domain.sala),
            domain.dataHoraInicio,
            domain.dataHoraTermino
        );
    }

    paraDto(domain: Reserva): ReservaDto {
        return new ReservaDto (
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
            this.usuarioMapper.paraDomainDeDto(dto.usuario),
            this.salaMapper.paraDomainDeDto(dto.sala),
            dto.dataHoraInicio,
            dto.dataHoraTermino
        );
    }
}