import { ApiProperty } from '@nestjs/swagger';
import { InteractionsTypeEnum } from '../enums/interaction-type.enum';

export class CreateInteractionDto {
  @ApiProperty({
    description: 'ID of the interaction',
  })
  id: string;

  @ApiProperty({
    description: 'ID of the application this interaction is for',
  })
  application_id: string;

  @ApiProperty({
    description: 'Type of interaction',
    enum: InteractionsTypeEnum,
    example: InteractionsTypeEnum.PING,
  })
  type: InteractionsTypeEnum;

  @ApiProperty({
    description: 'Interaction data payload',
  })
  data: any;

  @ApiProperty({
    description: 'Guild that the interaction was sent from',
  })
  guild_id: string;

  @ApiProperty({
    description: 'Channel that the interaction was sent from',
  })
  channel_id: string;

  @ApiProperty({
    description:
      'Guild member data for the invoking user, including permissions',
  })
  member: any;

  @ApiProperty({
    description: 'User object for the invoking user, if invoked in a DM',
  })
  user: any;

  @ApiProperty({
    description: 'Continuation token for responding to the interaction',
  })
  token: string;

  @ApiProperty({
    description: 'Read-only property, always 1',
  })
  version: number;

  @ApiProperty({
    description: 'For components, the message they were attached to',
  })
  message: any;

  @ApiProperty({
    description:
      'Bitwise set of permissions the app or bot has within the channel the interaction was sent from',
  })
  app_permissions: string;

  @ApiProperty({
    description: 'Selected language of the invoking user',
  })
  locale: string;

  @ApiProperty({
    description: "Guild's preferred locale, if invoked in a guild",
  })
  guild_locale: string;
}
