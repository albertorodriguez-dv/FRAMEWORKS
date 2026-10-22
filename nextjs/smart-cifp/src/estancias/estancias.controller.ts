import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

const ESTANCIAS = [
  { codigo: 'A23', nRadiadores: 2, temperaturaConfort: 21 },
  { codigo: 'A24', nRadiadores: 2, temperaturaConfort: 21 },
  { codigo: 'A25', nRadiadores: 3, temperaturaConfort: 20 },
  { codigo: 'A26', nRadiadores: 3, temperaturaConfort: 20 },
  { codigo: 'A27', nRadiadores: 2, temperaturaConfort: 21 },
];

@Controller('estancias')
export class EstanciasController {
  @Get()
  getAll() {
    return ESTANCIAS;
  }

  @Get('total')
  getNumberElements() {
    return 'El número total de estancias es ' + ESTANCIAS.length;
  }

  @Get(':codigo')
  getOne(@Param('codigo') id: string) {
    for (let i = 0; i < ESTANCIAS.length; i++) {
      if (ESTANCIAS[i].codigo === id) {
        return ESTANCIAS[i];
      }
    }
    throw new NotFoundException(`No existe una zona con el código: ${id}`);
  }
}
