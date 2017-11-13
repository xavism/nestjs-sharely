import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

@Module({
    modules: [CarsModule],
})
export class ApplicationModule {}