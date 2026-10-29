import { Injectable, NotFoundException } from '@nestjs/common';

const ZONAS_EJEMPLO = [
  {
    codigo: 'Z01',
    nombre: 'Tomates - nave norte',
    cultivo: 'Tomate',
    humedadSeca: 45,
    humedadObjetivo: 65,
  },
  {
    codigo: 'Z02',
    nombre: 'Lechugas - nave centro',
    cultivo: 'Lechuga',
    humedadSeca: 55,
    humedadObjetivo: 75,
  },
  {
    codigo: 'Z03',
    nombre: 'Pimientos - nave sur',
    cultivo: 'Pimiento',
    humedadSeca: 40,
    humedadObjetivo: 60,
  },
  {
    codigo: 'Z04',
    nombre: 'Semillero de fresas',
    cultivo: 'Fresa',
    humedadSeca: 50,
    humedadObjetivo: 70,
  },
];

@Injectable()
export class ZonasService {
  encuentraTodos() {
    return ZONAS_EJEMPLO;
  }

  encuentraUno(id: string) {
    for (let i = 0; i < ZONAS_EJEMPLO.length; i++) {
      if (ZONAS_EJEMPLO[i].codigo === id) {
        return ZONAS_EJEMPLO[i]; //res.json() envía una respuesta JSON al cliente. En este caso, se envía el objeto estancia correspondiente al código proporcionado como re...
      }
    }
    throw new NotFoundException(`Zona ${id} no encontrada`); //Si no se encuentra ninguna estancia con el código proporcionado, se lanza una excepción NotFoundException con un me...
  }
}
