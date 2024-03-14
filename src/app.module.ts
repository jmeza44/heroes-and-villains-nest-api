import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { VillainsModule } from './villains/villains.module';
import { VilliansController } from './villians/controllers/villians.controller';

@Module({
  imports: [HeroesModule, VillainsModule],
  controllers: [AppController, VilliansController],
  providers: [AppService],
})
export class AppModule {}
