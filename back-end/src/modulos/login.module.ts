import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoginController } from "src/camada_controller/login.controller";
import { UsuarioEntity } from "src/camada_entities/usuario.entity";
import { LoginUseCase } from "src/camada_use_case/login.usecase";
import { UsuarioUseCase } from "src/camada_use_case/usuario.usecase";

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity])],
    controllers: [LoginController],
    providers: [LoginUseCase, UsuarioUseCase]
})
export class LoginModule {}