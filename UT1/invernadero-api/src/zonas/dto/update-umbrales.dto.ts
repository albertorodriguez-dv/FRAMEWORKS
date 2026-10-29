import { IsNumber, Max, Min } from 'class-validator';

export class UpdateUmbralesDto {
  @IsNumber({}, { message: 'humedadSeca debe ser un número' })
  @Min(10, { message: 'humedadSeca no puede ser menor del 10%' })
  @Max(90, { message: 'humedadSeca no puede ser mayor del 90%' })
  humedadSeca: number;

  @IsNumber({}, { message: 'humedadObjetivo debe ser un número' })
  @Min(10, { message: 'humedadObjetivo no puede ser menor del 10%' })
  @Max(90, { message: 'humedadObjetivo no puede ser mayor del 90%' })
  humedadObjetivo: number;
}
