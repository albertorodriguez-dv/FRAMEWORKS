import { Injectable } from '@nestjs/common';

const ZONAS_EJEMPLO = [
  {
    codigo: 'A23',
    nombre: 'Semillero',
    nRadiadores: 2,
    temperaturaConfort: 20,
  },
  {
    codigo: 'A24',
    nombre: 'Cultivo de tomates',
    nRadiadores: 3,
    temperaturaConfort: 22,
  },
  {
    codigo: 'A25',
    nombre: 'Cultivo de lechugas',
    nRadiadores: 2,
    temperaturaConfort: 18,
  },
  {
    codigo: 'A26',
    nombre: 'Cultivo de pimientos',
    nRadiadores: 4,
    temperaturaConfort: 24,
  },
  {
    codigo: 'A27',
    nombre: 'Zona de germinación',
    nRadiadores: 3,
    temperaturaConfort: 21,
  },
  {
    codigo: 'A28',
    nombre: 'Plantas tropicales',
    nRadiadores: 4,
    temperaturaConfort: 26,
  },
];

@Injectable()
export class ZonasService {
  encuentraTodos() {
    return ZONAS_EJEMPLO;
  }

  contarZonas() {
    return ZONAS_EJEMPLO.length;
  }

  encuentraUno(codigo: string) {
    return ZONAS_EJEMPLO.find((zona) => zona.codigo === codigo);
  }
}
