import { Module } from '@nestjs/common';
import { VillainsController } from './controllers/villains.controller';
import { VillainsService } from './services/villains.service';

@Module({
  controllers: [VillainsController],
  providers: [VillainsService]
})
export class VillainsModule {}
