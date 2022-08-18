import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OnboardingController } from './onboarding.controller';
import { Onboarding, PackageVolume } from './onboarding.entity';
import { OnboardingService } from './onboarding.service';

@Module({
  controllers: [OnboardingController],
  imports: [TypeOrmModule.forFeature([Onboarding, PackageVolume])],
  providers: [OnboardingService],
})
export class OnboardingModule {}
