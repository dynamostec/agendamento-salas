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
        this.validarDataReserva(novaReserva.getSala().getId(), novaReserva.getDataHoraInicio(), novaReserva.getDataHoraTermino());

        const ususario = await this.usuarioUseCase.consultarPorId(novaReserva.getUsuario().getId());

        const sala = await this.salaUseCase.consultarPorId(novaReserva.getId());

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
            reserva = await this.repository.findOne({
                where: { id },
                relations: ['usuario', 'sala']
            });

        } catch (error) {
            console.error(error.message);
            throw new HttpException('Erro ao consultar reserva por id', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if (reserva === undefined) {
            throw new HttpException('Reserva não encontrada por id', HttpStatus.NOT_FOUND);
        }

        return ReservaMapper.paraDomain(reserva);
    }

    async listarPorId(idUsuario: string): Promise<Array<Reserva>> {
        let reservas;

        try {
            reservas = await this.repository.createQueryBuilder('reserva')
                .innerJoinAndSelect('reserva.usuario', 'usuario')
                .innerJoinAndSelect('reserva.sala', 'sala')
                .innerJoinAndSelect('sala.usuarioAdministrador', 'usuarioAdministrador')
                .where('usuario.id = :idUsuario', { idUsuario })
                .getMany()
        } catch (error) {
            console.error(error.message);
            throw new HttpException('Erro ao consultar reservas por usuario', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if (reservas.length === 0) {
            throw new HttpException('Nenhuma reserva com esse id usuario encontrada', HttpStatus.NOT_FOUND);
        }

        return ReservaMapper.paraDomains(reservas);
    }


    async validarDataReserva(idSala: string, dataHoraInicio: Date, dataHoraTermino: Date) {
        let reservasEntitis = await this.repository.createQueryBuilder('reserva')
            .innerJoinAndSelect('reserva.usuario', 'usuario')
            .innerJoinAndSelect('reserva.sala', 'sala')
            .innerJoinAndSelect('sala.usuarioAdministrador', 'usuarioAdministrador')
            .where('sala.id = :idSala', { idSala })
            .orderBy('reserva.dataHoraInicio', 'ASC') 
            .getMany();


        let reservas = ReservaMapper.paraDomains(reservasEntitis);

        const reservasNaData = reservas.filter(reserva => {

            const inicioReserva = new Date(reserva.getDataHoraInicio());
            const terminoReserva = new Date(reserva.getDataHoraTermino());
            const inicioData = new Date(dataHoraInicio);
            const terminoData = new Date(dataHoraTermino);

            const inicioReservaMinutos = inicioReserva.getUTCHours() * 60 + inicioReserva.getUTCMinutes();
            const terminoReservaMinutos = terminoReserva.getUTCHours() * 60 + terminoReserva.getUTCMinutes();
            const inicioDataMinutos = inicioData.getUTCHours() * 60 + inicioData.getUTCMinutes();
            const terminoDataMinutos = terminoData.getUTCHours() * 60 + terminoData.getUTCMinutes();

            const inicioReservaComMargem = inicioReservaMinutos - 60;
            const terminoReservaComMargem = terminoReservaMinutos + 60;

            return (
                terminoDataMinutos <= inicioReservaComMargem ||
                inicioDataMinutos >= terminoReservaComMargem
            );
        });

        if (reservasNaData.length === 0 && reservas.length > 0) {
            throw new HttpException('Horario indisponível', HttpStatus.BAD_REQUEST);
        }
    }


}