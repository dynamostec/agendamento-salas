import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Reserva } from "../camada_domain/reserva";
import { Repository } from "typeorm";
import { ReservaEntity } from "src/camada_entities/reserva.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { SalaUseCase } from "./sala.usecase";
import { UsuarioUseCase } from "./usuario.usecase";
import { ReservaMapper } from "src/camada_mapper/reserva.mapper";
import { EmailUseCase } from "./email.usecase";
import { TokenUseCase } from "./token.usecase";

@Injectable()
export class ReservaUseCase {

    constructor(
        @InjectRepository(ReservaEntity)
        private repository: Repository<ReservaEntity>,
        private salaUseCase: SalaUseCase,
        private usuarioUseCase: UsuarioUseCase,
        private emailUseCase: EmailUseCase,
        private tokenUseCase: TokenUseCase
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

        // const token = this.tokenUseCase.gerarToken(ususario.getEmail());
        // this.emailUseCase.enviarEmail(ususario.getEmail(), token);

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
        // Buscar reservas existentes da sala específica e do mesmo dia que a nova reserva
        const reservasEntitis = await this.repository.createQueryBuilder('reserva')
            .innerJoinAndSelect('reserva.usuario', 'usuario')
            .innerJoinAndSelect('reserva.sala', 'sala')
            .where('sala.id = :idSala', { idSala })
            .andWhere('DATE(reserva.dataHoraInicio) = DATE(:dataHoraInicio)', { dataHoraInicio })
            .orderBy('reserva.dataHoraInicio', 'ASC')
            .getMany();

        // Mapeando as entidades para objetos de domínio, se necessário

        if (reservasEntitis.length > 0) {
            const reservas = ReservaMapper.paraDomains(reservasEntitis);

            const inicioDataMinutos = new Date(dataHoraInicio).getUTCHours() * 60 + new Date(dataHoraInicio).getUTCMinutes();
            const terminoDataMinutos = new Date(dataHoraTermino).getUTCHours() * 60 + new Date(dataHoraTermino).getUTCMinutes();

            // Filtrando as reservas para verificar sobreposição com margem de uma hora
            const reservasNaData = reservas.filter(reserva => {
                const inicioReserva = new Date(reserva.getDataHoraInicio());
                const terminoReserva = new Date(reserva.getDataHoraTermino());

                const inicioReservaMinutos = inicioReserva.getUTCHours() * 60 + inicioReserva.getUTCMinutes();
                const terminoReservaMinutos = terminoReserva.getUTCHours() * 60 + terminoReserva.getUTCMinutes();

                const inicioReservaComMargem = inicioReservaMinutos - 60; // Uma hora antes do início da reserva
                const terminoReservaComMargem = terminoReservaMinutos + 60; // Uma hora após o término da reserva

                return !(
                    (terminoDataMinutos <= inicioReservaComMargem) ||
                    (inicioDataMinutos >= terminoReservaComMargem)
                );
            });

            // Lançando a exceção caso haja conflito
            if (reservasNaData.length > 0) {
                throw new HttpException('Horário indisponível', HttpStatus.BAD_REQUEST);
            }
        }
    }



}