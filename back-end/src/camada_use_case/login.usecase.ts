import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from 'src/camada_controller/dto/login.dto';
import { UsuarioUseCase } from './usuario.usecase';

@Injectable()
export class LoginUseCase {
  constructor(private usuarioUseCase: UsuarioUseCase) {}

  async validar(loginDto: LoginDto): Promise<any> {
    const { email, senha } = loginDto;
    const usuario = await this.usuarioUseCase.pesquisaPorEmail(email,senha);

    if (!usuario) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    if (usuario.senha !== senha) {
      throw new UnauthorizedException('Senha incorreta');
    }

    return { success: true, message: 'Login realziado' };
  }
}
