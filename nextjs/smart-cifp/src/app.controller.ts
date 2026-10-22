import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Comentario de prueba
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
