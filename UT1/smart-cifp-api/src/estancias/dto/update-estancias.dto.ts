import { IsNumber, Max, Min } from 'class-validator';

export class UpdateTemperaturaConfortDto {
  @IsNumber({}, { message: 'La temperatura de confort debe ser un número' })
  @Min(15, { message: 'La temperatura de confort no puede ser menor de 15ºC.' })
  @Max(28, {
    message: 'La temperatura de confort con puede ser mayor de 28ºC.',
  })
  temperaturaConfort: number;
}
