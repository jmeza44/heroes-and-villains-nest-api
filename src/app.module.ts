import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { VillainsModule } from './villains/villains.module';
import { VillainsController } from './villains/controllers/villains.controller';

import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    HeroesModule,
    VillainsModule,
  ],
  controllers: [AppController, VillainsController],
  providers: [AppService],
})
export class AppModule {}
