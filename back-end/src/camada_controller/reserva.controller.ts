import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ReservaDto } from "./dto/reserva.dto";
import { ReservaMapper } from "src/camada_mapper/reserva.mapper";
import { ReservaUseCase } from "src/camada_use_case/reserva.usecase";

@Controller('reservas')
export class ReservaController {

    constructor(private useCase: ReservaUseCase){}

    @Get('usuario/:id')
    async listarPorIdUsuario(@Param('id') idUsuario: string):Promise<Array<ReservaDto>> {
        return ReservaMapper.paraDtos(await this.useCase.listarPorId(idUsuario));
    }

    @Get(':id')
    async consultarPorId(@Param('id') id: string):Promise<ReservaDto> {
        return ReservaMapper.paraDto(await this.useCase.consultarPorId(id));
    }

    @Post()
    async cadastrar(@Body() novaReserva: ReservaDto):Promise<ReservaDto> {
        return ReservaMapper.paraDto(await this.useCase.cadastrar(ReservaMapper.paraDomainDeDto(novaReserva)));
    }

    @Delete(':id')
    @HttpCode(204)
    async deletar(@Param('id') id: string): Promise<void> {
        this.useCase.deletar(id);
    }
}