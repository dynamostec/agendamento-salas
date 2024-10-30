import { Injectable } from "@nestjs/common";
import { TipoUsuario } from "src/camada_domain/tipoUsario";
import { Usuario } from "src/camada_domain/usuario";

@Injectable()
export class UsuarioUseCase {
    
    consultarPorId(id: number): Usuario {
        return new Usuario(1, 'Usuario teste', 'emailteste@gmail.com', 'senhateste123!', TipoUsuario.ADMIN)
    }

}