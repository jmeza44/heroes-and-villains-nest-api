import { Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/database/data-source';
import { Character } from 'src/database/entities/character.entity';

@Injectable()
export class CharactersService {
  characterRepository = AppDataSource.getRepository(Character);

  constructor() {}

  async create(characterData: Partial<Character>): Promise<Character> {
    const character = this.characterRepository.create(characterData);
    return this.characterRepository.save(character);
  }

  async findAll(): Promise<Character[]> {
    return this.characterRepository.find();
  }

  async findOne(id: number): Promise<Character> {
    return this.characterRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    characterData: Partial<Character>,
  ): Promise<Character> {
    await this.characterRepository.update(id, characterData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.characterRepository.delete(id);
  }
}
