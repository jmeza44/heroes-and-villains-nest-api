import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Character } from 'src/database/entities/character.entity';
import { CharactersService } from '../services/characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private readonly characterService: CharactersService) {}

  @Post()
  async create(@Body() characterData: Partial<Character>): Promise<Character> {
    return this.characterService.create(characterData);
  }

  @Get()
  async findAll(): Promise<Character[]> {
    return this.characterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Character> {
    return this.characterService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() characterData: Partial<Character>,
  ): Promise<Character> {
    return this.characterService.update(+id, characterData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.characterService.remove(+id);
  }
}
