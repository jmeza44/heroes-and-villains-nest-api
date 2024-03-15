import { Module } from '@nestjs/common';
import { SuperpowersController } from './controllers/superpowers.controller';
import { SuperpowersService } from './services/superpowers.service';

@Module({
  controllers: [SuperpowersController],
  providers: [SuperpowersService],
})
export class SuperpowersModule {}
