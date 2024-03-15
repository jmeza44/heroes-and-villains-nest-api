import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CharactersModule } from './characters/characters.module';
import { SuperpowersModule } from './superpowers/superpowers.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CharactersModule,
    SuperpowersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
