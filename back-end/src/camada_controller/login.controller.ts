import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { LoginUseCase } from 'src/camada_use_case/login.usecase';

@Controller('login')
export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  @Post('login')
  async login(@Body() body, @Res() res) {
    const { email, senha } = body;
    const result = await this.loginUseCase.validar({ email, senha });

    if (result.success) {
      return res.status(HttpStatus.OK).json({ message: 'Login realizado com sucesso!' });
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Credenciais inválidas' });
    }
  }
}