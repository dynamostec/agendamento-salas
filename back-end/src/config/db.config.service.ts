import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class DbConfigService implements TypeOrmOptionsFactory{

    constructor(private configService: ConfigService){}
    
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get<string>('localhost'),
            port: this.configService.get<number>('3306'),
            username: this.configService.get<string>('Andre'),
            password: this.configService.get<string>('Andre'),
            database: this.configService.get<string>('agendamento_salas'),
            entities: [__dirname + '/../**/*.entity{.js,.ts}'],
            synchronize: true
        }
    }

}