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
    private repository: Repository<UsuarioEntity>
  ) {}

  async consultarPorId(id: string): Promise<UsuarioEntity> {
    return await this.repository.findOne({ where: { id } });
  }

  async cadastrar(novoUsuario: Usuario): Promise<Usuario> {
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

    return UsuarioMapper.paraDomain(usuarioSalvo);
  }

  async editarSenha(id: string, novaSenha: string): Promise<Usuario> {
    const senhaExistente = await this.consultarPorId(id);
    const senhaNova = UsuarioMapper.paraDomain(senhaExistente);
    senhaNova.setSenha(novaSenha);
    let senhaAtualizada;

    try {
      senhaAtualizada = await this.repository.save(senhaExistente);
    } catch (error) {
      console.error(error.message);
      throw new HttpException(
        'Erro ao salvar senha',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return UsuarioMapper.paraDomain(senhaAtualizada);
  }
}
