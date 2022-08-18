import { Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OnboardingService } from './onboarding.service';

@Controller()
@ApiTags('onboarding')
export class OnboardingController {
  constructor(private readonly onboardingService: OnboardingService) {}

  @Post('/create-new-realm/:name')
  async createNewRealm(@Param('name') name: string) {
    await this.onboardingService.createNewRealm(name);
  }

  @Post('/insert/:realm/:name')
  async insert(@Param('realm') realm: string, @Param('name') name: string) {
    return await this.onboardingService.insertVolume(realm, name);
  }
}
