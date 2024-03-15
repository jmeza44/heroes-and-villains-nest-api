import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Superpower } from '../../superpowers/entities/superpowers.entity';

@Entity()
export class Character extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: 'heroe' | 'villain';

  @Column()
  imagePath: string;

  @OneToMany(() => Superpower, (superpower) => superpower.character)
  superpowers: Superpower[];
}
