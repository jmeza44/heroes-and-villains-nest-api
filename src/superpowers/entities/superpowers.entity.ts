import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { Character } from '../../characters/entities/character.entity';

@Entity()
export class Superpower extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Character, (character) => character.superpowers)
  character: Character;
}
