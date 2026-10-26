import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstanciasModule } from './estancias/estancias.module';

@Module({
  imports: [EstanciasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
