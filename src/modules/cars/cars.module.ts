import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Car } from './entities/car.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Car])],
    controllers: [CarsController],
    components: [CarsService],
})
export class CarsModule {}