import { Injectable, Param, NotFoundException } from '@nestjs/common';

const ESTANCIAS = [
  { codigo: 'A23', nRadiadores: 2, temperaturaConfort: 21 },
  { codigo: 'A24', nRadiadores: 2, temperaturaConfort: 21 },
  { codigo: 'A25', nRadiadores: 3, temperaturaConfort: 20 },
  { codigo: 'A26', nRadiadores: 3, temperaturaConfort: 20 },
  { codigo: 'A27', nRadiadores: 2, temperaturaConfort: 21 },
];

@Injectable()
export class EstanciasService {
  getAll() {
    return ESTANCIAS;
  }

  getNumberElements(): string {
    return 'El número total de estancias es ' + ESTANCIAS.length;
  }

  getOne(@Param('codigo') id: string) {
    for (let i: number = 0; i < ESTANCIAS.length; i++) {
      if (ESTANCIAS[i].codigo === id) {
        return ESTANCIAS[i];
      }
    }
    throw new NotFoundException(`No existe una zona con el código: ${id}`);
  }

  NumeroTotalRadiadores(): number {
    let total: number = 0;

    for (let i: number = 0; i < ESTANCIAS.length; i++) {
      total += ESTANCIAS[i].nRadiadores;
    }

    return total;
  }

  NumeroRadiadoresEstancias(id: string): number {
    const estancia = this.getOne(id);
    return estancia.nRadiadores;
  }
}
