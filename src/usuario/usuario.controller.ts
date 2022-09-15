import { Controller, Get } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('listar')
  async listarTudo(): Promise<Usuario[]> {
    return this.usuarioService.listar();
  }
}
