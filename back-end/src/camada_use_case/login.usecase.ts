import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioUseCase } from './usuario.usecase';

@Injectable()
export class LoginUseCase {
  constructor(private usuarioUseCase: UsuarioUseCase) {}

  async validar(email: string, senha: string): Promise<any> {
    const usuario = await this.usuarioUseCase.pesquisaPorEmail(email);

    if (!usuario) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    if (usuario.getSenha() !== senha) {
      throw new UnauthorizedException('Senha incorreta');
    }

    return { success: true, message: 'Login realziado' };
  }
}
