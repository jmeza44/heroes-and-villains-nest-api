import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { SuperpowersService } from '../services/superpowers.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Superpower } from '../entities/superpowers.entity';
import { SuperpowerDto } from '../models/superpower.model';

@ApiTags('Superpowers')
@Controller('superpowers')
export class SuperpowersController {
  constructor(private readonly superpowerService: SuperpowersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new superpower' })
  @ApiResponse({
    status: 201,
    description: 'The superpower has been successfully created.',
  })
  async create(@Body() superpowerData: SuperpowerDto): Promise<Superpower> {
    return this.superpowerService.create(superpowerData);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all superpowers' })
  async findAll(): Promise<Superpower[]> {
    return this.superpowerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a superpower by ID' })
  async findOne(@Param('id') id: string): Promise<Superpower> {
    return this.superpowerService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a superpower by ID' })
  async update(
    @Param('id') id: string,
    @Body() superpowerData: SuperpowerDto,
  ): Promise<Superpower> {
    return this.superpowerService.update(+id, superpowerData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a superpower by ID' })
  @ApiResponse({
    status: 204,
    description: 'The superpower has been successfully deleted.',
  })
  async remove(@Param('id') id: string): Promise<void> {
    return this.superpowerService.remove(+id);
  }
}
