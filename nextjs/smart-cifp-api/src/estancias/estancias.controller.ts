import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
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
}
