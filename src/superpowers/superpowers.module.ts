import { Module } from '@nestjs/common';
import { Superpower } from 'src/database/entities/superpowers.entity';
import { SuperpowersController } from './controllers/superpowers.controller';
import { SuperpowersService } from './services/superpowers.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Superpower])],
  controllers: [SuperpowersController],
  providers: [SuperpowersService],
})
export class SuperpowersModule {}
