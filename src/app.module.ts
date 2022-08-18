import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config';
import { DatabaseModule } from './database/database.module';
import { OnboardingModule } from './onboarding/onboarding.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), DatabaseModule, OnboardingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
