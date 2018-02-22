import { Controller, Get, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsService } from './cars.service';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { Car } from './entities/car.entity';

@ApiUseTags('cars')
@Controller('cars')
export class CarsController {

	constructor(private readonly carsService: CarsService) {}

	@Get()
	@ApiResponse({ status: 200, description: 'Ok'})
	async findAll(): Promise<Car[]> {
	  return this.carsService.findAll();
	}

	@Get(':id')
	@ApiResponse({ status: 200, description: 'Car retrieved successfully.'})
	@ApiResponse({ status: 404, description: 'Car does not exist'})
	async findById(@Param('id') id: number): Promise<Car> {
	  return this.carsService.findById(id);
	}

	@Post()
	@ApiResponse({ status: 201, description: 'The record has been successfully created.'})
	@ApiResponse({ status: 403, description: 'Forbidden.'})
	@ApiResponse({ status: 400, description: 'Bad Request.'})
	async create(@Body() createCarDto: CreateCarDto): Promise<number> {
		return this.carsService.create(createCarDto);
	}

	@Delete(':id')
	@ApiResponse({ status: 200, description: 'Car deleted successfully.'})
	@ApiResponse({ status: 400, description: 'Bad Request.'})
	async delete(@Param('id') id: number) {
	  this.carsService.delete(id);
	}

	@Put()
	@ApiResponse({ status: 400, description: 'Bad Request.'})
	@ApiResponse({ status: 200, description: 'Car deleted successfully.'})
	async update(@Body() updateCarDto: UpdateCarDto): Promise<Car> {
	  return this.carsService.update(updateCarDto);
	}

}