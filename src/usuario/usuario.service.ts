import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async procurarPeloId(id:number): Promise<Usuario> {
    return this.usuarioRepository.findOne({
        where: {
            id: id,
        },
    });
  }

  async procurarPeloIdQB(id:number): Promise<Usuario> {
    return this.usuarioRepository
      .createQueryBuilder("usuario")
      .where("usuario.id = :id", { id: id })
      .getOne()
  }
}