import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioController } from "src/camada_controller/usuario.controller";
import { UsuarioEntity } from "src/camada_repository/entities/usuario.entity";
import { UsuarioUseCase } from "src/camada_use_case/usuario.usecase";

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity])],
    controllers: [UsuarioController],
    providers: [UsuarioUseCase]
})
export class UsuarioModule {}