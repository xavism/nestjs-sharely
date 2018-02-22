import { Component} from '@nestjs/common';
import { Car } from './entities/car.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Component()
export class CarsService {
  private id: number = 1;
	private readonly cars: Car[] = [];

	constructor(){
		console.log('Im the Persisted Service');
	}
  create(carDto: CreateCarDto) {
		let id: number = this.id;
		let car: Car = {
			id : id,
			brand: carDto.brand,
			model: carDto.model,
			power: carDto.power,
			year: carDto.year
		}
		this.cars.push(car);
		++this.id;
		return id;
  }

  findAll(): Car[] {
    return this.cars;
  }

  findById(id: number): Car {
  	for (var i = this.cars.length - 1; i >= 0; i--) {
  		if (this.cars[i].id == id) return this.cars[i];
  	}
  	return null;
  }

  delete(id: number) {
  	for (var i = this.cars.length - 1; i >= 0; i--) {
  		if (this.cars[i].id == id) this.cars.splice(i, 1);
  	}
  }

  update(carDto: UpdateCarDto): Car{
  	for (var i = this.cars.length - 1; i >= 0; i--) {
  		if (this.cars[i].id == carDto.id) {
  			this.cars[i] = carDto;
  			return this.cars[i];
  		}
  	}
  	return null;
  }
}