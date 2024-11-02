import { SalaMapper } from './../camada_mapper/sala.mapper';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Sala } from "src/camada_domain/sala";
import { UsuarioUseCase } from './usuario.usecase';
import { InjectRepository } from '@nestjs/typeorm';
import { SalaEntity } from 'src/camada_entities/sala.entity';
import { Repository } from 'typeorm';
import { TipoUsuario } from 'src/camada_domain/tipoUsario';
import { UsuarioMapper } from 'src/camada_mapper/usuario.mapper';

@Injectable()
export class SalaUseCase {

    constructor(
        @InjectRepository(SalaEntity)
        private readonly repository: Repository<SalaEntity>,
        private usuarioUseCase: UsuarioUseCase
    ) { }

    async deletar(id: string) {
        this.consultarPorId(id);
        try {
            this.repository.delete(id);
        } catch (error) {
            console.error(error.message);
            throw new HttpException('Erro ao deletar sala', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async editar(novosDados: Sala, id: string): Promise<Sala> {
        let salaExistente = await this.consultarPorId(id);
        salaExistente.alterarDados(novosDados);
        let salaAtualizada;

        try {
            salaAtualizada = await this.repository.save(SalaMapper.paraEntity(salaExistente))
        } catch (error) {
            console.error(error.message);
            throw new HttpException('Erro ao salvar sala', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return SalaMapper.paraDomain(salaAtualizada);
    }

    async cadastrar(novaSala: Sala): Promise<Sala> {
        const nome = novaSala.getNome();
        let salaExistente;
        try {
            salaExistente = await this.repository.find({ where: { nome } });
        } catch (error) {
            console.error(error.message);
            throw new HttpException('Erro ao buscar sala por id', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if (salaExistente != null || salaExistente != undefined) {
            throw new HttpException('Sala com este nome já cadastrada', HttpStatus.BAD_REQUEST);
        }

        const usuario = await this.usuarioUseCase.consultarPorId(novaSala.getUsuarioAdministrador().getId());

        if (usuario.tipoUsuario != TipoUsuario.ADMIN) {
            throw new HttpException('Usuário não administrador não pode cadastrar salas', HttpStatus.BAD_REQUEST);
        }

        novaSala.setUsuarioAdministrador(UsuarioMapper.paraDomain(usuario));

        let novaSalaSalva;

        try {
            novaSalaSalva = await this.repository.save(SalaMapper.paraEntity(novaSala));
        } catch (error) {
            console.error(error.message);
            throw new HttpException('Erro ao salvar sala', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return SalaMapper.paraDomain(novaSalaSalva);
    }

    async consultarPorId(id: string): Promise<Sala> {
        let sala;

        try {
            sala = await this.repository.findOne({
                where: { id },
                relations: ['usuarioAdministrador'],
            });
        } catch (error) {
            console.error(error.message);
            throw new HttpException('Erro ao consultar sala por id', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if (sala == null) {
            throw new HttpException('Sala não encontrada', HttpStatus.NOT_FOUND)
        }

        return SalaMapper.paraDomain(sala);
    }

    async consultarPorAdministrador(idAdministrador: string): Promise<Array<Sala>> {
        let salas;

        try {
            salas = await this.repository.createQueryBuilder('sala')
                .innerJoinAndSelect('sala.usuarioAdministrador', 'usuario')
                .where('usuario.id = :idAdministrador', { idAdministrador })
                .getMany()
        } catch (error) {
            console.error(error.message);
            throw new HttpException('Erro ao consultar salas por administradores', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return SalaMapper.paraDoamains(salas);
    }


    async listar(): Promise<Array<Sala>> {
        let salas;

        try {
            salas = await this.repository.find({
                relations: ['usuarioAdministrador'],
            });
        } catch (error) {
            console.error(error.message);
            throw new HttpException('Erro ao listar salas', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
        return SalaMapper.paraDoamains(salas);
    }
}