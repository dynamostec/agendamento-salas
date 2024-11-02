import { Module } from "@nestjs/common";
import { SalaController } from "../camada_controller/sala.controller";
import { SalaUseCase } from "src/camada_use_case/sala.usecase";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SalaEntity } from "src/camada_entities/sala.entity";
import { UsuarioUseCase } from "src/camada_use_case/usuario.usecase";
import { UsuarioEntity } from "src/camada_entities/usuario.entity";

@Module({
    imports: [TypeOrmModule.forFeature([SalaEntity, UsuarioEntity])],
    controllers: [SalaController],
    providers: [SalaUseCase, UsuarioUseCase]
})
export class SalaModule {}