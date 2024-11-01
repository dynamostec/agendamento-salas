import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { SalaDto } from "./dto/salaDto";
import { SalaUseCase } from "src/camada_use_case/sala.usecase";
import { SalaMapper } from "src/camada_mapper/sala.mapper";


@Controller('salas')
export class SalaController {

    constructor(private useCase: SalaUseCase) { }


    @Get()
    async listar(): Promise<Array<SalaDto>> {
        return (await this.useCase.listar()).map(sala => SalaMapper.paraDto(sala));
    }

    @Get('/administrador/:id')
    async consultarPorAdministrador(@Param('id') idAdministrador: string): Promise<Array<SalaDto>> {
        return SalaMapper.paraDtos(await this.useCase.consultarPorAdministrador(idAdministrador));
    }

    @Get('/:id')
    async consultarPorId(@Param('id') id: string): Promise<SalaDto> {
        const sala = await this.useCase.consultarPorId(id)
        return SalaMapper.paraDto(sala);
    }

    @Post()
    async cadastrar(@Body() novaSala: SalaDto): Promise<SalaDto> {
        console.log(novaSala);
        return SalaMapper.paraDto(await this.useCase.cadastrar(SalaMapper.paraDomainDeDto(novaSala)));
    }

    @Put('/:id')
    async editar(@Body() novosDados: SalaDto, @Param('id') id: string): Promise<SalaDto> {
        return SalaMapper.paraDto(await this.useCase.editar(SalaMapper.paraDomainDeDto(novosDados), id));
    }

    @Delete('/:id')
    @HttpCode(204)
    async deletar(@Param('id') id: string) {
        this.useCase.deletar(id);
    }
}