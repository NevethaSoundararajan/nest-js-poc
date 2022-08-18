import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { Onboarding, PackageVolume, package_volume } from './onboarding.entity';

import { cloneDeep, cloneWith } from 'lodash';

@Injectable()
export class OnboardingService {
  constructor(
    @InjectRepository(Onboarding)
    private readonly onboardingRepository: Repository<Onboarding>,
    @InjectRepository(PackageVolume)
    private readonly packVolRepo: Repository<PackageVolume>,
  ) {}

  public async createNewRealm(name: string) {
    const queryRunner: QueryRunner =
      this.onboardingRepository.manager.connection.createQueryRunner();

    await queryRunner.createSchema(name);

    const package_volume_table = package_volume(name);
    await queryRunner.createTable(package_volume_table);
  }

  public async insertVolume(realm: string, package_name: string) {
    const repo = this.packVolRepo;
    repo.manager.connection.setOptions({ schema: realm, autoSave: true });
    repo.metadata.tableMetadataArgs.schema = realm;
    repo.metadata.connection.driver.schema = realm;
    const original_path = repo.metadata.tablePath;
    repo.metadata.tablePath = `${realm}.${original_path}`;

    console.log(`Current Path : ${repo.metadata.tablePath}`);

    const result = await repo.insert({ name: package_name });
    repo.metadata.tablePath = original_path;
    return result;
  }
}
