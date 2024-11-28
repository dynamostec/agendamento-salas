import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioMapper } from 'src/camada_mapper/usuario.mapper';
import { UsuarioUseCase } from 'src/camada_use_case/usuario.usecase';

@Controller('usuarios')
export class UsuarioController {
  constructor(private useCase: UsuarioUseCase) {}

  @Post()
  async cadastrar(@Body() novoUsuario: UsuarioDto): Promise<UsuarioDto> {
    return UsuarioMapper.paraDto(
      await this.useCase.cadastrar(UsuarioMapper.paraDomainDeDto(novoUsuario)),
    );
  }

  @Patch('alterar-senha/:email')
  async alterarSenha(
    @Param('email') email: string,
    @Body('novaSenha') novaSenha: string,
  ): Promise<UsuarioDto> {
    return UsuarioMapper.paraDto(await this.useCase.editarSenha(email, novaSenha));
  }

  @Get('email/:email')
  async buscarPorEmail(@Param('email') email: string) {
    return UsuarioMapper.paraDto(await this.useCase.pesquisaPorEmail(email));
  }

  @Get('/:id')
  async buscarPorId(@Param('id') id: string) {
    return UsuarioMapper.paraDto(await this.useCase.consultarPorId(id));
  }
}
