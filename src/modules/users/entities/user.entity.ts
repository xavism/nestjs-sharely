import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity('users')
export class User extends BaseEntity{

  @Column({ length: 50 })
  readonly name: string;
  @Column({ length: 50 })
  readonly age: number;
  @Column({ length: 50 })
  readonly favouriteColor: number;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}