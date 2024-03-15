import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

import { AppDataSource } from './database/data-source';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Character } from './database/entities/character.entity';
import { Superpower } from './database/entities/superpowers.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  AppDataSource.initialize()
    .then(async (dataSource) => {
      console.log(
        '[DATABASE CONNECTION] Connection stabilized.',
        dataSource.isInitialized,
      );

      const fly = new Superpower();
      fly.name = 'fly';

      const superman = new Character();
      superman.name = 'Superman';
      superman.type = 'heroe';
      superman.imagePath = '';
      superman.superpowers = [fly];

      await dataSource.manager.save(superman);
    })
    .catch((error) =>
      console.error('[DATABASE CONNECTION] Connection failure.', error),
    );

  const config = new DocumentBuilder()
    .setTitle('Characters API')
    .setDescription('CRUD Operations with Characters')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
