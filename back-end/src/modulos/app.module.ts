import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario.module';
import { SalaModule } from './sala.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfigService } from 'src/config/db.config.service';
import { LoginModule } from './login.module';
import { ReservaModule } from './reserva.module';


@Module({
  imports: [
    UsuarioModule,
    SalaModule,
    LoginModule,
    ReservaModule,
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
