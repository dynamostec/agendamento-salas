import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Reserva } from "../camada_domain/reserva";
import { Repository } from "typeorm";
import { ReservaEntity } from "src/camada_entities/reserva.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { SalaUseCase } from "./sala.usecase";
import { UsuarioUseCase } from "./usuario.usecase";
import { ReservaMapper } from "src/camada_mapper/reserva.mapper";
import { EmailUseCase } from "./email.usecase";

@Injectable()
export class ReservaUseCase {

    constructor(
        @InjectRepository(ReservaEntity)
        private repository: Repository<ReservaEntity>,
        private salaUseCase: SalaUseCase,
        private usuarioUseCase: UsuarioUseCase,
        private emailUseCase: EmailUseCase
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
        await this.validarDataReserva(novaReserva.getSala().getId(), novaReserva.getDataHoraInicio(), novaReserva.getDataHoraTermino());

        const ususario = await this.usuarioUseCase.consultarPorId(novaReserva.getUsuario().getId());

        const sala = await this.salaUseCase.consultarPorId(novaReserva.getSala().getId());

        novaReserva.setUsuario(ususario);
        novaReserva.setSala(sala);

        let reservaSalva;

        try {
            reservaSalva = ReservaMapper.paraDomain(await this.repository.save(ReservaMapper.paraEntity(novaReserva)));
        } catch (error) {
            console.log(error.message);
            throw new HttpException('Erro ao salvar reserva', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        this.emailUseCase.enviarEmail(ususario, novaReserva);

        return reservaSalva;
    }

    async consultarPorId(id: string): Promise<Reserva> {
        let reserva;
        try {
            reserva = await this.repository.createQueryBuilder('reserva')
                .innerJoinAndSelect('reserva.usuario', 'usuario')
                .innerJoinAndSelect('reserva.sala', 'sala')
                .innerJoinAndSelect('sala.usuarioAdministrador', 'usuarioAdministrador')
                .where('reserva.id = :id', { id })
                .getOne();

        } catch (error) {
            console.error(error.message);
            throw new HttpException('Erro ao consultar reserva por id', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if (reserva === undefined) {
            throw new HttpException('Reserva não encontrada por id', HttpStatus.NOT_FOUND);
        }

        reserva.dataHoraInicio.setHours(reserva.dataHoraInicio.getHours() - 3);
        reserva.dataHoraTermino.setHours(reserva.dataHoraTermino.getHours() - 3);
    
        return ReservaMapper.paraDomain(reserva);
    }

    async listarPorId(idUsuario: string): Promise<Array<Reserva>> {
        let reservas: ReservaEntity[] = [];

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
        const reservasEntitis = await this.repository.createQueryBuilder('reserva')
            .innerJoinAndSelect('reserva.usuario', 'usuario')
            .innerJoinAndSelect('reserva.sala', 'sala')
            .innerJoinAndSelect('sala.usuarioAdministrador', 'usuarioAdministrador')
            .where('sala.id = :idSala', { idSala })
            .andWhere('DATE(reserva.dataHoraInicio) = DATE(:dataHoraInicio)', { dataHoraInicio })
            .orderBy('reserva.dataHoraInicio', 'ASC')
            .getMany();

        if (reservasEntitis.length > 0) {
            const reservas = ReservaMapper.paraDomains(reservasEntitis);

            const inicioDataMinutos = new Date(dataHoraInicio).getUTCHours() * 60 + new Date(dataHoraInicio).getUTCMinutes();
            const terminoDataMinutos = new Date(dataHoraTermino).getUTCHours() * 60 + new Date(dataHoraTermino).getUTCMinutes();

            
            const reservasNaData = reservas.filter(reserva => {
                const inicioReserva = new Date(reserva.getDataHoraInicio());
                const terminoReserva = new Date(reserva.getDataHoraTermino());

                const inicioReservaMinutos = inicioReserva.getUTCHours() * 60 + inicioReserva.getUTCMinutes();
                const terminoReservaMinutos = terminoReserva.getUTCHours() * 60 + terminoReserva.getUTCMinutes();

                const inicioReservaComMargem = inicioReservaMinutos - 60; 
                const terminoReservaComMargem = terminoReservaMinutos + 60; 

                return !(
                    (terminoDataMinutos <= inicioReservaComMargem) ||
                    (inicioDataMinutos >= terminoReservaComMargem)
                );
            });

            if (reservasNaData.length > 0) {
                throw new HttpException('Horário indisponível', HttpStatus.BAD_REQUEST);
            }
        }
    }



}