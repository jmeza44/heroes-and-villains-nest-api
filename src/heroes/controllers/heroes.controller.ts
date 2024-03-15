import { Controller, Get } from '@nestjs/common';
import { Heroe } from 'src/database/entities/heroe.entity';

@Controller('heroes')
export class HeroesController {
  @Get()
  async findAll(): Promise<Heroe[]> {
    return await Heroe.find();
  }
}
