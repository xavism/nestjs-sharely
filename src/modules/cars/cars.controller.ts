import { Controller, Get, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsService } from './cars.service';
import { Car } from './interfaces/car.interface';


@Controller('cars')
export class CarsController {

	constructor(private readonly carsService: CarsService) {}

	@Get()
	async findAll(): Promise<Car[]> {
	  return this.carsService.findAll();
	}

	@Get(':id')
	async findById(@Param('id') id: number): Promise<Car> {
		console.log(id);
	  return this.carsService.findById(id);
	}

	@Post()
	async create(@Body() createCarDto: CreateCarDto) {
	  this.carsService.create(createCarDto);
	}

	@Delete(':id')
	async delete(@Param('id') id: number) {
	  this.carsService.delete(id);
	}

	@Put()
	async update(@Body() updateCarDto: UpdateCarDto): Promise<Car> {
	  return this.carsService.update(updateCarDto);
	}

}