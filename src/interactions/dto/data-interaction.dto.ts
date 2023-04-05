import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class DataInteractionDto {
  @ApiProperty({
    description: 'The ID of the invoked command',
  })
  id: string;

  @ApiProperty({
    description: 'The name of the invoked command',
  })
  name: string;

  @ApiProperty({
    description: 'The type of the invoked command',
  })
  type: number;

  @ApiProperty({
    description: 'Converted users + roles + channels + attachments',
  })
  resolved: any;

  @ApiProperty({
    description: 'The params + values from the user',
  })
  options: any;

  @ApiProperty({
    name: 'guild_id',
    description: 'The id of the guild the command is registered to',
  })
  @Expose({ name: 'guild_id' })
  guildId: string;

  @ApiProperty({
    name: 'target_id',
    description:
      'Id of the user or message targeted by a user or message command',
  })
  @Expose({ name: 'target_id' })
  targetId: string;
}
