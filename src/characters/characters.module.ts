import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from 'src/database/entities/character.entity';
import { CharactersController } from './controllers/characters.controller';
import { CharactersService } from './services/characters.service';

@Module({
  imports: [TypeOrmModule.forFeature([Character])],
  controllers: [CharactersController],
  providers: [CharactersService],
})
export class CharactersModule {}
