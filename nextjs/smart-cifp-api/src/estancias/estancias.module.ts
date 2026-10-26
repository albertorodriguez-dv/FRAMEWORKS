import { Module } from '@nestjs/common';
import { EstanciasController } from './estancias.controller.js';
import { EstanciasService } from './estancias.service.js';

@Module({
  controllers: [EstanciasController],
  providers: [EstanciasService],
})
export class EstanciasModule {}
