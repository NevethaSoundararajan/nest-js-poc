import { BaseEntity } from "src/base-entity";
import { Column, Entity } from "typeorm";

@Entity('Database')
export class Realm extends BaseEntity{

@Column()
name:string;

@Column()
id:number;

@Column()
location: string;

@Column()
description:string;

}