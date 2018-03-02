import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
}