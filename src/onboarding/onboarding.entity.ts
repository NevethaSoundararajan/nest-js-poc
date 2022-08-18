import { Column, Entity, PrimaryGeneratedColumn, Table } from 'typeorm';

@Entity()
export class Onboarding {
  @Column()
  name: string;

  @PrimaryGeneratedColumn()
  id: number;
}

@Entity('PackageVolume')
export class PackageVolume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export const package_volume = (schema: string): Table => {
  return new Table({
    schema: schema,
    name: 'PackageVolume',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
      },
      {
        name: 'name',
        type: 'varchar',
      },
    ],
  });
};
