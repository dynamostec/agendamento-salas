import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { LoginUseCase } from 'src/camada_use_case/login.usecase';
import { LoginDto } from './dto/login.dto';

@Controller('login')
export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  @Post()
  async login(@Body() body: LoginDto, @Res() res) {
    const result = await this.loginUseCase.validar(body.email, body.senha);

    if (result.success) {
      return res.status(HttpStatus.OK).json({ message: 'Login realizado com sucesso!' });
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Credenciais inválidas' });
    }
  }
}