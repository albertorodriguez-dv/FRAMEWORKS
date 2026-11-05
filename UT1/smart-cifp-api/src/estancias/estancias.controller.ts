import {
  Controller,
  Get,
  Param,
  Patch,
  Body,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UpdateTemperaturaConfortDto } from './dto/update-estancias.dto.js';
import { EstanciasService } from './estancias.service.js';

@Controller('estancias')
export class EstanciasController {
  constructor(private readonly estanciasService: EstanciasService) {}

  @Get()
  findAll() {
    return this.estanciasService.getAll();
  }

  @Get('total')
  getNumberElements() {
    return this.estanciasService.getNumberElements();
  }

  @Get(':codigo')
  findOne(@Param('codigo') codigo: string) {
    return this.estanciasService.getOne(codigo);
  }

  @Patch(':codigo/estancias')
  actualizaEstancias(
    @Param('codigo') id: string,
    @Body() dto: UpdateTemperaturaConfortDto,
  ) {
    const estancia = this.estanciasService.getOne(id);

    estancia.temperaturaConfort = dto.temperaturaConfort;
    return estancia;
  }
}
