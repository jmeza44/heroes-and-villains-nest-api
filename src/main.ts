import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

import { AppDataSource } from './database/data-source';
import { Heroe } from './database/entities/heroe.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  AppDataSource.initialize()
    .then(async (dataSource) => {
      const heroe = new Heroe();
      heroe.firstName = 'TypeScript';
      heroe.lastName = 'Language';
      heroe.age = 12;
      await dataSource.manager.save(heroe);
    })
    .catch((error) => console.log(error));
  await app.listen(3000);
}
bootstrap();
