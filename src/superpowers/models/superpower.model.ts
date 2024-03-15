import { ApiProperty } from '@nestjs/swagger';

export class SuperpowerDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  characterId: number;
}
