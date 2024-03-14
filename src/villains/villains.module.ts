import { Module } from '@nestjs/common';
import { VillainsController } from './controllers/villains.controller';

@Module({
  controllers: [VillainsController]
})
export class VillainsModule {}
