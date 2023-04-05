import { Module } from '@nestjs/common';
import { InteractionsModule } from './interactions/interactions.module';

@Module({
  imports: [InteractionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
