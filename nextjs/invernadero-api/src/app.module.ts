import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZonasModule } from './zonas/zonas.module';

@Module({
  imports: [ZonasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
