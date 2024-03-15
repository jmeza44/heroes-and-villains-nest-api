import { DataSource } from 'typeorm';
import { Character } from './entities/character.entity';
import { Superpower } from './entities/superpowers.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env['APP_DATABASE_HOST'],
  port: parseInt(process.env['APP_DATABASE_PORT']),
  username: process.env['APP_DATABASE_USER'],
  password: process.env['APP_DATABASE_PASSWORD'],
  database: process.env['APP_DATABASE_NAME'],
  synchronize: true,
  logging: true,
  entities: [Character, Superpower],
  subscribers: [],
  migrations: [],
});
