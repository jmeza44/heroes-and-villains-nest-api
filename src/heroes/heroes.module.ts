import { Module } from '@nestjs/common';
import { HeroesController } from './controllers/heroes.controller';
import { HeroesService } from './services/heroes.service';

@Module({
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}
