import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Reserva } from "../camada_domain/reserva";
import { Repository } from "typeorm";
import { ReservaEntity } from "src/camada_entities/reserva.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { SalaUseCase } from "./sala.usecase";
import { UsuarioUseCase } from "./usuario.usecase";
import { ReservaMapper } from "src/camada_mapper/reserva.mapper";

@Injectable()
export class ReservaUseCase {

    constructor(
        @InjectRepository(ReservaEntity)
        private repository: Repository<ReservaEntity>,
        private salaUseCase: SalaUseCase,
        private usuarioUseCase: UsuarioUseCase
    ) { }

    async deletar(id: string) {
        this.consultarPorId(id);
        try {
            await this.repository.delete(id);
        } catch (error) {
            console.error(error.message);
            throw new HttpException('Erro ao deletar reserva', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    async cadastrar(novaReserva: Reserva): Promise<Reserva> {
        this.validarDataReserva(novaReserva.getDataHoraInicio(), novaReserva.getDataHoraTermino());

        const ususario = await this.usuarioUseCase.consultarPorId(novaReserva.getUsuario().getId());

        const sala = await this.salaUseCase.consultarPorId(novaReserva.getUsuario().getId());

        novaReserva.setUsuario(ususario);
        novaReserva.setSala(sala);

        let reservaSalva;

        try {
            reservaSalva = ReservaMapper.paraDomain(await this.repository.save(ReservaMapper.paraEntity(novaReserva)));
        } catch (error) {
            console.log(error.message);
            throw new HttpException('Erro ao salvar sala', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return reservaSalva;
    }

    async consultarPorId(id: string): Promise<Reserva> {
        let reserva;
        try {
            reserva = await this.repository.find({ where: { id } });
        } catch (error) {
            console.error(error.message);
            throw new HttpException('Erro ao consultar reserva por id', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return ReservaMapper.paraDomain(reserva);
    }

    async listarPorId(idUsuario: string): Promise<Array<Reserva>> {
        let reservas;

        try {
            reservas = await this.repository.createQueryBuilder('reserva')
                .innerJoinAndSelect('reserva.usuario', 'usuario')
                .where('usuario.id = :idUsuario', { idUsuario })
                .getMany()
        } catch (error) {
            console.error(error.message);
            throw new HttpException('Erro ao consultar reservas por usuario', HttpStatus.INTERNAL_SERVER_ERROR); ''
        }
        
        return reservas;
    }


    async validarDataReserva(dataHoraInicio: Date, dataHoraTermino: Date) {
        const datasReservasJaExistentes = ReservaMapper.paraDomains(
            await this.repository.find({ where: { dataHoraInicio } }))
            .sort(
                (a, b) => a.getDataHoraInicio().getTime() - b.getDataHoraInicio().getTime()
            );

        datasReservasJaExistentes.map(reserva => {
            if (!(dataHoraInicio.getHours() <= reserva.getDataHoraInicio().getHours() - 1)
                || !(dataHoraInicio.getHours() >= reserva.getDataHoraTermino().getHours() + 1)
            ) {
                throw new HttpException('Horario indisponível', HttpStatus.BAD_REQUEST);
            }
        })

    }


}