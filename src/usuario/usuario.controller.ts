import { Controller, Get, Param } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('listar')
  async listarTudo(): Promise<Usuario[]> {
    return this.usuarioService.listar();
  }

  @Get('listar/:id')
  async listarPorId(@Param() params): Promise<Usuario> {
    return this.usuarioService.procurarPeloId(params.id);
  }

  @Get('procurar/:id')
  async procurarPorId(@Param() params): Promise<Usuario> {
    return this.usuarioService.procurarPeloIdQB(params.id);
  }
}
