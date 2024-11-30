import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class DbConfigService implements TypeOrmOptionsFactory{

    constructor(private configService: ConfigService){}
    
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get<string>('127.0.0.1'),
            port: this.configService.get<number>('3306'),
            username: this.configService.get<string>('root'),
            password: this.configService.get<string>('root'),
            database: this.configService.get<string>('agendamento_salas'),
            entities: [__dirname + '/../**/*.entity{.js,.ts}'],
            synchronize: true
        }
    }

}