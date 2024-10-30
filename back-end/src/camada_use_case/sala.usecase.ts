import { SalaMapper } from './../camada_mapper/sala.mapper';
import { Injectable } from "@nestjs/common";
import { Sala } from "src/camada_domain/sala";
import { UsuarioUseCase } from './usuario.usecase';
import { InjectRepository } from '@nestjs/typeorm';
import { SalaEntity } from 'src/camada_repository/entities/sala.entity';
import { Repository } from 'typeorm';
import { UsuarioEntity } from 'src/camada_repository/entities/usuario.entity';

@Injectable()
export class SalaUseCase {
    
    constructor(
        @InjectRepository(SalaEntity)
        private readonly repository: Repository<SalaEntity>,
        private usuarioUseCase: UsuarioUseCase
    ){}
    
    async deletar(id: number) {
        this.consultarPorId(id);
        this.repository.delete(id);
    }

    async editar(novosDados: Sala, id: number): Promise<Sala> {
        let salaExistente = this.consultarPorId(id);
        salaExistente.alterarDados(novosDados);
        const salaAtualizada = await this.repository.save(SalaMapper.paraEntity(salaExistente))
        return SalaMapper.paraDomain(salaAtualizada);
    }

    async cadastrar(novaSala: Sala): Promise<Sala> {
        const nome = novaSala.nome;
        const salaExistente = await this.repository.find({ where: {nome}});

        if(salaExistente == null || salaExistente == undefined) {
            console.log('Sala com este nome já cadastrada');
        }else {
            const usuario = this.usuarioUseCase.consultarPorId(novaSala.usuarioAdministrador.id);
            novaSala.usuarioAdministrador = usuario;
            const novaSalaSalva = await this.repository.save(SalaMapper.paraEntity(novaSala))
            return SalaMapper.paraDomain(novaSalaSalva);
        }
    }

    async consultarPorId(id: number): Promise<Sala> {
        const sala = await this.repository.findOne({where: {id}});

        if(sala != null || sala == undefined) {
            console.log('Sala não encontrada');
        }else {
            return SalaMapper.paraDomain(sala);
        }
    }

    async consultarPorAdministrador(idAdministrador: number):Promise<Array<Sala>> {
        return SalaMapper.paraDoamains(
            await this.repository.createQueryBuilder('sala')
            .innerJoinAndSelect('sala.usuarioAdministrador', 'usuario')
            .where('usuario.id = :idAdministrador', {idAdministrador})
            .getMany()
        );
    }


    async listar(): Array<Sala> {
        return this.repository.getAll();
    }


}