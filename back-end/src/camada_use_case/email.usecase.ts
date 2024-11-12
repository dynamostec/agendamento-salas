import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UsuarioUseCase } from "./usuario.usecase";
import * as nodemailer from 'nodemailer';


@Injectable()
export class EmailUseCase {

    private trasporter;

    constructor(private usuarioUsCase: UsuarioUseCase) {
        this.trasporter = nodemailer.createTrasport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'chatcesu@gmail.com',
                pass: 'dztn yprc obyt tcpi'
            },
        });
    }
    
    async enviarEmail(emailUsuario: string, token: string) {
    
        try{
            await this.trasporter.sendMail({
                from: "Dynamos quantumsquadti@gmail.com",
                to: emailUsuario,
                subject: "Confirmação de reserva",
                text: `Olá,
                    Sua reserva foi computada com sucesso !
                
                Atenciosamente,
                Equipe Dynamos`,
                html: `
                    <p>Olá,</p>
                    <p>Sua reserva foi computada com sucesso</p>
                    <br><br>
                    <p>Atenciosamente,</p>
                    <p>Equipe Dynamos</p>
                `
            })
        }catch(error){
            console.error("Erro no envio de email de confirmação: ", error);
            throw new HttpException("Erro ao cadastrar usuário", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }      
}