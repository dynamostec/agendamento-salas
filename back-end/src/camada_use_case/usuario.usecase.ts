import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoUsuario } from 'src/camada_domain/tipoUsario';
import { Usuario } from 'src/camada_domain/usuario';
import { UsuarioMapper } from 'src/camada_mapper/usuario.mapper';
import { UsuarioEntity } from 'src/camada_entities/usuario.entity';
import { Repository } from 'typeorm';
import { UsuarioDto } from 'src/camada_controller/dto/usuarioDto';

@Injectable()
export class UsuarioUseCase {
  constructor(
    @InjectRepository(UsuarioEntity)
    private repository: Repository<UsuarioEntity>,
    private usuarioUseCase: UsuarioUseCase,
  ) {}

  async consultarPorId(id: string): Promise<UsuarioEntity> {
    return await this.repository.findOne({ where: { id } });
  }

  //Conversar com o Vitor sobre o UsuárioDto utiliazdo na promise
  async cadastrar(novoUsuario: Usuario): Promise<UsuarioDto> {
    const email = novoUsuario.getEmail();
    let usuarioExistente;

    try {
      usuarioExistente = await this.repository.findOne({ where: { email } });
    } catch (error) {
      console.error(error.message);
      throw new HttpException(
        'Erro ao buscar usuário',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    if (usuarioExistente) {
      throw new HttpException(
        'Usuário com este e-mail já cadastrado',
        HttpStatus.BAD_REQUEST,
      );
    }

    let usuarioSalvo;
    try {
      usuarioSalvo = await this.repository.save(
        UsuarioMapper.paraEntity(novoUsuario),
      );
    } catch (error) {
      console.error(error.message);
      throw new HttpException(
        'Erro ao salvar usuário',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return UsuarioMapper.paraDto(usuarioSalvo);
  }

  async editarSenha(id: string, novaSenha: string): Promise<Usuario> {
    let senhaExistente = await this.consultarPorId(id);
    senhaExistente.alterar(novaSenha);
    let senhaAtualizada;

    try {
        senhaAtualizada = await this.repository.save(UsuarioMapper.paraEntity(senhaExistente))
    } catch (error) {
        console.error(error.message);
        throw new HttpException('Erro ao salvar sala', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return UsuarioMapper.paraDomain(senhaAtualizada);

    // const senhaExistente = await this.consultarPorId(id);
    // const senhaNova = UsuarioMapper.paraDomain(senhaExistente);

    // senhaNova.alterarSenha(novaSenha);

    // let senhaAtualizada;

    // try {
    //   senhaAtualizada = await this.repository.save(
    //     UsuarioMapper.paraEntity(senhaNova),
    //   );
    // } catch (error) {
    //   console.error(error.message);
    //   throw new HttpException(
    //     'Erro ao salvar sala',
    //     HttpStatus.INTERNAL_SERVER_ERROR,
    //   );
    // }
    // return UsuarioMapper.paraDomain(senhaAtualizada);
  }
}
