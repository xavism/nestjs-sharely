import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50 })
  readonly brand: string;
  @Column({ length: 50 })
  readonly model: string;
  @Column({ length: 50 })
  readonly power: number;
  @Column()
  readonly year: number;

  constructor(brand: string, model: string, power: number, year: number, id?: number) {
    this.brand = brand;
    this.model = model;
    this.power = power;
    this.year = year;
    if (id) this.id = id;
  }
}