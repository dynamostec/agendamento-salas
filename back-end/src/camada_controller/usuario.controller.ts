import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioDto } from "./dto/usuarioDto";
import { UsuarioMapper } from "src/camada_mapper/usuario.mapper";
import { UsuarioUseCase } from "src/camada_use_case/usuario.usecase";

@Controller('usuarios')
export class UsuarioController {

    constructor(
        private useCase:UsuarioUseCase
    ){}

    @Post()
    async cadastrar(@Body() novoUsuario: UsuarioDto):Promise<UsuarioDto> {
        return UsuarioMapper.paraDto(await this.useCase.cadastrar(UsuarioMapper.paraDomainDeDto(novoUsuario)));
    }
}