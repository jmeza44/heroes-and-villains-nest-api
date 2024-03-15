import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CharactersModule } from './characters/characters.module';
import { SuperpowersModule } from './superpowers/superpowers.module';
import { Character } from './database/entities/character.entity';
import { Superpower } from './database/entities/superpowers.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.APP_DATABASE_HOST,
      port: parseInt(process.env.APP_DATABASE_PORT),
      username: process.env.APP_DATABASE_USER_NAME,
      password: process.env.APP_DATABASE_PASSWORD,
      database: process.env.APP_DATABASE_NAME,
      entities: [Character, Superpower],
      synchronize: true,
    }),
    CharactersModule,
    SuperpowersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
