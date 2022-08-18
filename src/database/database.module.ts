import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';

@Module({
  imports:[],
  controllers: [DatabaseController],
  providers: [DatabaseService],
  exports: []
})
export class DatabaseModule {}
