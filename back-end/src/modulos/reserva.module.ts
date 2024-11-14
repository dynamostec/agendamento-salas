import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReservaController } from "src/camada_controller/reserva.controller";
import { ReservaEntity } from "src/camada_entities/reserva.entity";
import { SalaEntity } from "src/camada_entities/sala.entity";
import { UsuarioEntity } from "src/camada_entities/usuario.entity";
import { EmailUseCase } from "src/camada_use_case/email.usecase";
import { ReservaUseCase } from "src/camada_use_case/reserva.usecase";
import { SalaUseCase } from "src/camada_use_case/sala.usecase";
import { UsuarioUseCase } from "src/camada_use_case/usuario.usecase";

@Module({
    imports: [TypeOrmModule.forFeature([ReservaEntity, SalaEntity, UsuarioEntity])],
    controllers: [ReservaController],
    providers: [ReservaUseCase, SalaUseCase, UsuarioUseCase, EmailUseCase]
})
export class ReservaModule {}