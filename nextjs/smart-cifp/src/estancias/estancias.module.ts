import { Module } from '@nestjs/common';
import { EstanciasController } from './estancias.controller.js';

@Module({
  controllers: [EstanciasController],
})
export class EstanciasModule {}
