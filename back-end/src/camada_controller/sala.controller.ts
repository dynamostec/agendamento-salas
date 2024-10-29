import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SalaDto } from "./dto/salaDto";
import { SalaUseCase } from "src/camada_use_case/sala.usecase";


@Controller('salas')
export class SalaController {

    constructor(private useCase:SalaUseCase){}


    @Get()
    listar():Array<SalaDto> {
        return this.useCase.listar();
    }

    @Get('/administrador/:id')
    consultarPorAdministrador(@Param('id') idAdministrador: number): SalaDto {
        return this.useCase.consultarPorAdministrador(idAdministrador);
    }

    @Get('/:id')
    consultarPorId(@Param('id') id: number): SalaDto {
        return this.useCase.consultarPorId(id);
    }

    @Post()
    cadastrar(novaSala: SalaDto): SalaDto {
        return this.useCase.cadastrar(novaSala);
    }

    @Put('/:id') 
    editar(novosDados: SalaDto, @Param('id') id: number): SalaDto {
        return this.useCase.editar(novosDados, id);
    }

    @Delete('/:id')
    deletar(@Param('id') id: number) {
        this.useCase.deletar(id);
    }
 }