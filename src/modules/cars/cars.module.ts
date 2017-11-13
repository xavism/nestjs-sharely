import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
    controllers: [CarsController],
    components: [CarsService],
})
export class CarsModule {}