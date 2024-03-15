import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CharactersService } from '../services/characters.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Character } from '../entities/character.entity';
import { CharacterDto } from '../models/character.model';

@ApiTags('Characters')
@Controller('characters')
export class CharactersController {
  constructor(private readonly characterService: CharactersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new character' })
  @ApiResponse({
    status: 201,
    description: 'The character has been successfully created.',
  })
  async create(@Body() characterData: CharacterDto): Promise<Character> {
    return this.characterService.create(characterData);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all characters' })
  async findAll(): Promise<Character[]> {
    return this.characterService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a character by ID' })
  async findOne(@Param('id') id: string): Promise<Character> {
    return this.characterService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a character by ID' })
  async update(
    @Param('id') id: string,
    @Body() characterData: CharacterDto,
  ): Promise<Character> {
    return this.characterService.update(+id, characterData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a character by ID' })
  @ApiResponse({
    status: 204,
    description: 'The character has been successfully deleted.',
  })
  async remove(@Param('id') id: string): Promise<void> {
    return this.characterService.remove(+id);
  }
}
