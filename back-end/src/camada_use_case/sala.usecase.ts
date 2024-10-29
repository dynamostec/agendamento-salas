import { SalaMapper } from './../camada_mapper/sala.mapper';
import { Injectable } from "@nestjs/common";
import { Sala } from "src/camada_domain/sala";

@Injectable()
export class SalaUseCase {
    
    constructor(private repository: SalaRepository){}
    
    deletar(id: number) {
        this.consultarPorId(id);
        this.repository.delete(id);
    }

    editar(novosDados: Sala, id: number): Sala {
        let salaExistente = this.consultarPorId(id);
        salaExistente.alterarDados(novosDados);
        return SalaMapper.paraDomain(this.repository.save(SalaMapper.paraEntity(salaExistente)));
    }
    cadastrar(novaSala: Sala): Sala {
        let salaExistente = this.repository.consultarPorNome(novaSala.nome);

        if(salaExistente == null || salaExistente == undefined) {
            console.log('Sala com este nome já cadastrada');
        }else {
            return SalaMapper.paraDomain(this.repository.save(SalaMapper.paraEntity(novaSala)));
        }
    }
    consultarPorId(id: number): Sala {
        throw new Error("Method not implemented.");
    }
    consultarPorAdministrador(idAdministrador: number): Sala {
        throw new Error("Method not implemented.");
    }
    listar(): Array<Sala> {
        throw new Error("Method not implemented.");
    }


}