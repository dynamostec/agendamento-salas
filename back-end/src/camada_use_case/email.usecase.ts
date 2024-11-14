import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UsuarioUseCase } from "./usuario.usecase";
import * as nodemailer from 'nodemailer';
import { Usuario } from "src/camada_domain/usuario";
import { Reserva } from "src/camada_domain/reserva";

@Injectable()
export class EmailUseCase {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'chatcesu@gmail.com',
                pass: 'dztn yprc obyt tcpi'
            },
        });
    }
    
    async enviarEmail(usuario: Usuario, reserva: Reserva) {
        const inicio = new Date(reserva.getDataHoraInicio());
        const termino = new Date(reserva.getDataHoraTermino());

        try {
            await this.transporter.sendMail({
                from: "Dynamos dynamos.tec@gmail.com",
                to: usuario.getEmail(),
                subject: "Confirmação de reserva",
                text: `Olá ${usuario.getNome()}, Sua reserva do dia ${inicio.getUTCDate()}/${inicio.getUTCMonth() + 1} 
                    as ${inicio.getUTCHours()}:${inicio.getUTCMinutes()} até ${termino.getUTCHours()}:${termino.getUTCMinutes()}
                    na sala ${reserva.getSala().getNome()} localizada no endereço ${reserva.getSala().getLocalizacao().getRua()}, 
                    ${reserva.getSala().getLocalizacao().getCidade()}/${reserva.getSala().getLocalizacao().getEstado()} - ${reserva.getSala().getLocalizacao().getCep()}
                    foi computada com sucesso ! 
                    
                    Atenciosamente, Equipe Dynamos`,
                html: `
                    <p>Olá ${usuario.getNome()},</p>
                    <p>Sua reserva do dia ${inicio.getUTCDate()}/${inicio.getUTCMonth() + 1}   
                        as ${inicio.getUTCHours()}:${inicio.getUTCMinutes()} até ${termino.getUTCHours()}:${termino.getUTCMinutes()}
                        na sala ${reserva.getSala().getNome()} localizada no endereço ${reserva.getSala().getLocalizacao().getRua()}, 
                        ${reserva.getSala().getLocalizacao().getCidade()}/${reserva.getSala().getLocalizacao().getEstado()} - ${reserva.getSala().getLocalizacao().getCep()}
                        foi computada com sucesso ! </p>
                    <br><br>
                    <p>Atenciosamente,</p>
                    <p>Equipe Dynamos</p>
                `
            });
        } catch (error) {
            console.error("Erro no envio de email de confirmação: ", error);
            throw new HttpException("Erro ao cadastrar usuário", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
