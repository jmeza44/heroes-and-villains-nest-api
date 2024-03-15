import { ApiProperty } from '@nestjs/swagger';
import { Superpower } from 'src/superpowers/entities/superpowers.entity';

export class CharacterDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ enum: ['heroe', 'villain'] })
  type: 'heroe' | 'villain';

  @ApiProperty()
  imagePath: string;

  @ApiProperty()
  superpowers: Superpower[]; // Assuming it's an array of superpower IDs
}
