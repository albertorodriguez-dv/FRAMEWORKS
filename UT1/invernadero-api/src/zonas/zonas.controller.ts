import {
  Controller,
  Get,
  Param,
  Patch,
  Body,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UpdateUmbralesDto } from './dto/update-umbrales.dto.js';
import { ZonasService } from './zonas.service.js';

@Controller('zonas')
export class ZonasController {
  constructor(private readonly zonasService: ZonasService) {}
  @Get()
  encuentraTodos() {
    return this.zonasService.encuentraTodos();
  }

  @Get(':codigo')
  encuentraUno(@Param('codigo') id: string) {
    return this.zonasService.encuentraUno(id);
  }

  @Patch(':codigo/umbrales')
  actualizaUmbrales(
    @Param('codigo') id: string,
    @Body() dto: UpdateUmbralesDto,
  ) {
    const zona = this.zonasService.encuentraUno(id);
    if (dto.humedadSeca >= dto.humedadObjetivo) {
      throw new BadRequestException(
        'humedadSeca debe ser menor que humedadObjetivo',
      );
    }

    zona.humedadSeca = dto.humedadSeca;
    zona.humedadObjetivo = dto.humedadObjetivo;
    return zona;
  }
}
