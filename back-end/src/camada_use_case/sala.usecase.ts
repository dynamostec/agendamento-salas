import { Injectable } from "@nestjs/common";
import { SalaDto } from "../camada_controller/dto/salaDto";

@Injectable()
export class SalaUseCase {
    
    constructor(private repository: SalaRepository){}
    
    deletar(id: number) {
        this.consultarPorId(id);
        this.repository.delete(id);
    }

    editar(novosDados: SalaDto, id: number): SalaDto {
        
    }
    cadastrar(novaSala: SalaDto): import("../camada_controller/dto/salaDto").SalaDto {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id: number): import("../camada_controller/dto/salaDto").SalaDto {
        throw new Error("Method not implemented.");
    }
    consultarPorAdministrador(idAdministrador: number): import("../camada_controller/dto/salaDto").SalaDto {
        throw new Error("Method not implemented.");
    }
    listar(): import("../camada_controller/dto/salaDto").SalaDto[] {
        throw new Error("Method not implemented.");
    }


}