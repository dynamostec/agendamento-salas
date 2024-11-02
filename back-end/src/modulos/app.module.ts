import { Module } from '@nestjs/common';
import { SalaController } from '../camada_controller/sala.controller';
import { UsuarioModule } from './usuario.module';
import { SalaModule } from './sala.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfigService } from 'src/config/db.config.service';

@Module({
  imports: [
    UsuarioModule,
    SalaModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: DbConfigService,
      inject: [DbConfigService]
    })
  ],
})
export class AppModule {}
