import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Superpower } from 'src/database/entities/superpowers.entity';
import { SuperpowersService } from '../services/superpowers.service';

@Controller('superpowers')
export class SuperpowersController {
  constructor(private readonly superpowerService: SuperpowersService) {}

  @Post()
  async create(
    @Body() superpowerData: Partial<Superpower>,
  ): Promise<Superpower> {
    return this.superpowerService.create(superpowerData);
  }

  @Get()
  async findAll(): Promise<Superpower[]> {
    return this.superpowerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Superpower> {
    return this.superpowerService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() superpowerData: Partial<Superpower>,
  ): Promise<Superpower> {
    return this.superpowerService.update(+id, superpowerData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.superpowerService.remove(+id);
  }
}
