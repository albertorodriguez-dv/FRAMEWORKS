import { Controller, Get, Param } from '@nestjs/common';
import { ZonasService } from './zonas.service.js';

@Controller('zonas')
export class ZonasController {
  constructor(private readonly zonasService: ZonasService) {}

  @Get()
  encuentraTodos() {
    return this.zonasService.encuentraTodos();
  }

  @Get('total')
  contarZonas() {
    return this.zonasService.contarZonas();
  }

  @Get(':codigo')
  encuentraUno(@Param('codigo') codigo: string) {
    return this.zonasService.encuentraUno(codigo);
  }
}
