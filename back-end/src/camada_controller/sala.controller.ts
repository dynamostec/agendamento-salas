import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SalaDto } from "./dto/salaDto";
import { SalaUseCase } from "src/camada_use_case/sala.usecase";
import { SalaMapper } from "src/camada_mapper/sala.mapper";


@Controller('salas')
export class SalaController {

    constructor(private useCase:SalaUseCase){}


    @Get()
    listar():Array<SalaDto> {
        return this.useCase.listar().map(sala => SalaMapper.paraDto(sala));
    }

    @Get('/administrador/:id')
    consultarPorAdministrador(@Param('id') idAdministrador: number): SalaDto {
        return SalaMapper.paraDto(this.useCase.consultarPorAdministrador(idAdministrador));
    }

    @Get('/:id')
    consultarPorId(@Param('id') id: number): SalaDto {
        return SalaMapper.paraDto(this.useCase.consultarPorId(id));
    }

    @Post()
    cadastrar(novaSala: SalaDto): SalaDto {
        return SalaMapper.paraDto(this.useCase.cadastrar(SalaMapper.paraDomainDeDto(novaSala)));
    }

    @Put('/:id') 
    editar(novosDados: SalaDto, @Param('id') id: number): SalaDto {
        return SalaMapper.paraDto(this.useCase.editar(SalaMapper.paraDomainDeDto(novosDados), id));
    }

    @Delete('/:id')
    deletar(@Param('id') id: number) {
        this.useCase.deletar(id);
    }
 }