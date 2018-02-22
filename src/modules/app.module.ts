import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
    modules: [CarsModule, TypeOrmModule.forRoot()],
})
export class ApplicationModule {
    constructor(private readonly connection: Connection) {}
}