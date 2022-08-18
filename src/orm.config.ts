import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'd',
  password: 'd',
  port: 5432,
  host: '127.0.0.1',
  database: 'cloud-drive',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
